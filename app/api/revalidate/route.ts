import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: { current?: string };
    }>(req, process.env.SANITY_WEBHOOK_SECRET);

    // Validate webhook signature (optional but recommended)
    if (!isValidSignature && process.env.NODE_ENV === "production") {
      return new Response("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    // Revalidate based on content type
    switch (body._type) {
      case "woundType":
        revalidatePath("/wounds");
        if (body.slug?.current) {
          revalidatePath(`/wounds/${body.slug.current}`);
        }
        break;
      case "treatment":
        revalidatePath("/treatments");
        if (body.slug?.current) {
          revalidatePath(`/treatments/${body.slug.current}`);
        }
        break;
      case "product":
        revalidatePath("/resources/products");
        // Also revalidate wounds and treatments that use this product
        revalidatePath("/wounds");
        revalidatePath("/treatments");
        break;
      case "glossaryTerm":
        revalidatePath("/resources/glossary");
        break;
      default:
        // Revalidate all if we're not sure
        revalidatePath("/");
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (err: any) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}

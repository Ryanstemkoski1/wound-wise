import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Bed, Bandage, Droplet, Apple, Wrench } from "lucide-react";
import type { Product } from "@/types/content";

interface ProductCardProps {
  product: Product;
}

// Category icon mapping
const categoryIcons = {
  positioning: Bed,
  dressing: Bandage,
  cleanser: Droplet,
  nutrition: Apple,
  tool: Wrench,
};

export function ProductCard({ product }: ProductCardProps) {
  // Format category for display
  const categoryLabel = product.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Get category icon
  const CategoryIcon =
    categoryIcons[product.category as keyof typeof categoryIcons] || Package;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
          <CategoryIcon className="w-24 h-24 text-muted-foreground/30" />
        </div>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          {product.featured && (
            <Badge variant="secondary" className="shrink-0">
              Popular
            </Badge>
          )}
        </div>
        <CardDescription>
          <Badge variant="outline" className="mt-1">
            {categoryLabel}
          </Badge>
        </CardDescription>
      </CardHeader>

      <CardContent className="grow">
        <p className="text-sm text-muted-foreground mb-4">
          {product.description}
        </p>

        {product.useCases.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2">Best For:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {product.useCases.slice(0, 3).map((useCase, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-primary shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3">
        <Button asChild className="w-full">
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center justify-center gap-2"
          >
            View on{" "}
            {product.affiliatePartner === "amazon" ? "Amazon" : "Partner Site"}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          As an Amazon Associate, WoundWise earns from qualifying purchases.
        </p>
      </CardFooter>
    </Card>
  );
}

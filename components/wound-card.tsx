import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { WoundType } from "@/types/content";

interface WoundCardProps {
  wound: WoundType;
}

export function WoundCard({ wound }: WoundCardProps) {
  return (
    <Link href={`/wounds/${wound.slug}`} className="group">
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader>
          {wound.images && wound.images.length > 0 && (
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
              <Image
                src={wound.images[0].url}
                alt={wound.images[0].alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          )}
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {wound.title}
            </CardTitle>
            {wound.metadata.featured && (
              <Badge variant="secondary" className="shrink-0">
                Featured
              </Badge>
            )}
          </div>
          <CardDescription>{wound.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {wound.description}
          </p>
          <div className="mt-4 flex items-center text-sm text-primary font-medium">
            Learn more
            <svg
              className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

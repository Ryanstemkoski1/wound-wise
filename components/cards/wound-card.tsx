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
import {
  Heart,
  AlertCircle,
  Activity,
  Droplet,
  Flame,
  Zap,
  Shield,
  XCircle,
} from "lucide-react";
import type { WoundType } from "@/types/content";

interface WoundCardProps {
  wound: WoundType;
}

// Render icon based on wound type
const renderWoundIcon = (slug: string, className: string) => {
  const iconProps = { className };

  switch (slug) {
    case "pressure-injuries":
      return <Heart {...iconProps} />;
    case "diabetic-ulcers":
      return <Activity {...iconProps} />;
    case "venous-ulcers":
      return <Droplet {...iconProps} />;
    case "arterial-wounds":
      return <Zap {...iconProps} />;
    case "burns":
      return <Flame {...iconProps} />;
    case "surgical-wounds":
      return <Shield {...iconProps} />;
    case "skin-tears":
      return <AlertCircle {...iconProps} />;
    case "traumatic-wounds":
      return <XCircle {...iconProps} />;
    case "non-healing-wounds":
      return <AlertCircle {...iconProps} />;
    case "cancer-lesions":
      return <AlertCircle {...iconProps} />;
    case "radiation-wounds":
      return <Zap {...iconProps} />;
    case "end-of-life-wounds":
      return <Heart {...iconProps} />;
    default:
      return <AlertCircle {...iconProps} />;
  }
};

export function WoundCard({ wound }: WoundCardProps) {
  return (
    <Link href={`/wounds/${wound.slug}`} className="group">
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader>
          {wound.images && wound.images.length > 0 ? (
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
              <Image
                src={wound.images[0].url}
                alt={wound.images[0].alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              {renderWoundIcon(
                wound.slug,
                "h-20 w-20 text-primary/40 transition-transform group-hover:scale-110"
              )}
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

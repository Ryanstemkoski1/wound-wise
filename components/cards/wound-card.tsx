"use client";

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
  // Generate hero image path based on slug
  const heroImagePath = `/images/wounds/${wound.slug}-hero.png`;

  return (
    <Link href={`/wounds/${wound.slug}`} className="group">
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader>
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <Image
              src={heroImagePath}
              alt={`${wound.title} - ${wound.subtitle}`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                // Hide image on error and show icon fallback
                e.currentTarget.style.display = "none";
              }}
            />
            {/* Icon fallback - will show if image fails to load */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {renderWoundIcon(
                wound.slug,
                "h-20 w-20 text-primary/40 transition-transform group-hover:scale-110"
              )}
            </div>
          </div>
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

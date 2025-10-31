"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Stethoscope,
  Shield,
  Droplet,
  Bandage,
  Apple,
  Activity,
  Heart,
  Sparkles,
  Scissors,
} from "lucide-react";
import type { Treatment } from "@/types/content";

interface TreatmentCardProps {
  treatment: Treatment;
}

// Render icon based on treatment type
const renderTreatmentIcon = (slug: string, className: string) => {
  const iconProps = { className };

  switch (slug) {
    case "wound-dressings":
      return <Bandage {...iconProps} />;
    case "infection-control":
      return <Shield {...iconProps} />;
    case "nutrition-healing":
      return <Apple {...iconProps} />;
    case "offloading-positioning":
      return <Activity {...iconProps} />;
    case "pain-management":
      return <Heart {...iconProps} />;
    case "wound-cleansing":
      return <Droplet {...iconProps} />;
    case "wound-debridement":
      return <Scissors {...iconProps} />;
    case "moisture-management":
      return <Droplet {...iconProps} />;
    case "mobility-exercise":
      return <Activity {...iconProps} />;
    case "advanced-therapies":
      return <Sparkles {...iconProps} />;
    default:
      return <Stethoscope {...iconProps} />;
  }
};

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  // Extract first few sections as key benefits if keyBenefits not present
  const benefits =
    treatment.keyBenefits ||
    treatment.sections?.slice(0, 3).map((s) => s.heading) ||
    [];

  // Generate hero image path based on slug
  const heroImagePath = `/images/treatments/${treatment.slug}-hero.png`;

  return (
    <Link href={`/treatments/${treatment.slug}`}>
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
        <CardHeader>
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-linear-to-br from-accent/10 to-accent/5 flex items-center justify-center">
            <Image
              src={heroImagePath}
              alt={`${treatment.title} - ${
                treatment.subtitle || treatment.description
              }`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                // Hide image on error and show icon fallback
                e.currentTarget.style.display = "none";
              }}
            />
            {/* Icon fallback - will show if image fails to load */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {renderTreatmentIcon(
                treatment.slug,
                "h-20 w-20 text-accent/40 transition-transform group-hover:scale-110"
              )}
            </div>
          </div>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {treatment.title}
            </CardTitle>
            {(treatment.featured || treatment.metadata?.featured) && (
              <Badge variant="default" className="shrink-0">
                Essential
              </Badge>
            )}
          </div>
          {treatment.subtitle && (
            <CardDescription className="text-base">
              {treatment.subtitle}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground line-clamp-3">
            {treatment.description}
          </p>

          {benefits.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Key Topics:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="line-clamp-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center gap-2 text-primary font-medium pt-2">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

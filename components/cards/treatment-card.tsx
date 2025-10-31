import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Treatment } from "@/types/content";

interface TreatmentCardProps {
  treatment: Treatment;
}

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  // Extract first few sections as key benefits if keyBenefits not present
  const benefits =
    treatment.keyBenefits ||
    treatment.sections?.slice(0, 3).map((s) => s.heading) ||
    [];

  return (
    <Link href={`/treatments/${treatment.slug}`}>
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
        <CardHeader>
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

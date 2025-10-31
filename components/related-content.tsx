import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Stethoscope, FileText, BookOpen } from "lucide-react";
import type { RelatedItem } from "@/lib/related-content";
import { cn } from "@/lib/utils";

interface RelatedContentProps {
  items: RelatedItem[];
  title: string;
  description?: string;
  variant?: "default" | "compact";
  className?: string;
}

export function RelatedContent({
  items,
  title,
  description,
  variant = "default",
  className,
}: RelatedContentProps) {
  if (items.length === 0) return null;

  const getCategoryIcon = (category: RelatedItem["category"]) => {
    switch (category) {
      case "wound":
        return <Stethoscope className="h-4 w-4" />;
      case "treatment":
        return <FileText className="h-4 w-4" />;
      case "resource":
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: RelatedItem["category"]) => {
    switch (category) {
      case "wound":
        return "border-primary/20 hover:border-primary";
      case "treatment":
        return "border-accent/20 hover:border-accent";
      case "resource":
        return "border-muted-foreground/20 hover:border-muted-foreground/50";
    }
  };

  if (variant === "compact") {
    return (
      <div className={className}>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        )}
        <div className="space-y-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="flex items-center gap-2 p-3 rounded-lg border hover:bg-accent transition-colors group">
                <div className="shrink-0">{getCategoryIcon(item.category)}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <Card
              className={cn(
                "h-full transition-all hover:shadow-md group",
                getCategoryColor(item.category)
              )}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {getCategoryIcon(item.category)}
                  </div>
                  <Badge variant="outline" className="text-xs capitalize">
                    {item.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-primary font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

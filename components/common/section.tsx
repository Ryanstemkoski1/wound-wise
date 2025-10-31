import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "narrow" | "wide" | "full";
  container?: boolean;
  id?: string;
}

const maxWidths = {
  default: "max-w-7xl", // 1280px - standard content width
  narrow: "max-w-4xl", // 896px - for text-heavy content (about, blog posts)
  wide: "max-w-screen-2xl", // 1536px - for dashboard-like layouts
  full: "max-w-none", // No max width - full bleed
};

/**
 * Section - Reusable container component for consistent layout
 *
 * Provides consistent spacing, max-width, and responsive padding across all pages.
 *
 * @param variant - Controls max-width:
 *   - 'default' (1280px): Standard content sections
 *   - 'narrow' (896px): Text-heavy pages like About, Blog posts
 *   - 'wide' (1536px): Dashboard or grid-heavy layouts
 *   - 'full': No max-width restriction
 * @param container - If true, adds container mx-auto px-4 wrapper (default: true)
 * @param className - Additional Tailwind classes to merge
 * @param id - Optional ID for anchor linking
 *
 * @example
 * // Standard content section
 * <Section>
 *   <h2>Content here</h2>
 * </Section>
 *
 * @example
 * // Narrow text-focused section (About page)
 * <Section variant="narrow">
 *   <p>Long-form text content...</p>
 * </Section>
 *
 * @example
 * // Full-width hero without container
 * <Section variant="full" container={false} className="bg-primary/5 py-20">
 *   <div className="container mx-auto px-4">
 *     <h1>Hero Content</h1>
 *   </div>
 * </Section>
 */
export function Section({
  children,
  className,
  variant = "default",
  container = true,
  id,
}: SectionProps) {
  const maxWidth = maxWidths[variant];

  if (!container) {
    // No container wrapper, just apply className
    return (
      <section id={id} className={cn(className)}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className={cn("container mx-auto px-4", maxWidth)}>{children}</div>
    </section>
  );
}

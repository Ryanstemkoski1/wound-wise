import { RelatedContent } from "@/components/related-content";
import { getYouMayAlsoLike } from "@/lib/related-content";

interface YouMayAlsoLikeProps {
  pageId: string;
  className?: string;
}

export function YouMayAlsoLike({ pageId, className }: YouMayAlsoLikeProps) {
  const suggestions = getYouMayAlsoLike(pageId, 3);

  if (suggestions.length === 0) return null;

  return (
    <div className={className}>
      <RelatedContent
        items={suggestions}
        title="You May Also Like"
        description="Related content that might interest you"
      />
    </div>
  );
}

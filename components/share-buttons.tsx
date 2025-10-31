"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  url?: string;
  title?: string;
  variant?: "default" | "compact";
  className?: string;
}

export function ShareButtons({
  url,
  title,
  variant = "default",
  className,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // Use current page URL if not provided
  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");
  const shareTitle = title || "WoundWise - Expert Wound Care Education";

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(shareTitle)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(linkedInUrl, "_blank", "width=600,height=400");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <span className="text-sm text-muted-foreground mr-1">Share:</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={handleFacebookShare}
          title="Share on Facebook"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={handleTwitterShare}
          title="Share on Twitter"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={handleLinkedInShare}
          title="Share on LinkedIn"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={handleCopyLink}
          title={copied ? "Link copied!" : "Copy link"}
          aria-label={copied ? "Link copied" : "Copy link"}
        >
          {copied ? (
            <Check className="h-4 w-4 text-primary" />
          ) : (
            <Link2 className="h-4 w-4" />
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-sm font-medium text-muted-foreground">
        Share this article
      </p>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleFacebookShare}
          className="gap-2"
        >
          <Facebook className="h-4 w-4" />
          <span>Facebook</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleTwitterShare}
          className="gap-2"
        >
          <Twitter className="h-4 w-4" />
          <span>Twitter</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLinkedInShare}
          className="gap-2"
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyLink}
          className={cn("gap-2", copied && "border-primary text-primary")}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4" />
              <span>Copy Link</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

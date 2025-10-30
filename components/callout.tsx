import { cn } from "@/lib/utils";
import type { ContentCallout } from "@/types/content";

interface CalloutProps {
  callout: ContentCallout;
  className?: string;
}

const calloutStyles = {
  info: {
    container: "bg-primary/5 border-primary/20",
    icon: "text-primary",
    iconPath: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  warning: {
    container: "bg-destructive/5 border-destructive/20",
    icon: "text-destructive",
    iconPath:
      "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
  tip: {
    container: "bg-accent/30 border-accent/40",
    icon: "text-accent-foreground",
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  example: {
    container: "bg-secondary/50 border-secondary",
    icon: "text-secondary-foreground",
    iconPath:
      "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
  },
  story: {
    container: "bg-muted border-muted-foreground/20",
    icon: "text-muted-foreground",
    iconPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
};

export function Callout({ callout, className }: CalloutProps) {
  const style = calloutStyles[callout.type];

  return (
    <div
      className={cn("my-6 rounded-lg border p-4", style.container, className)}
    >
      <div className="flex gap-3">
        <div className="shrink-0">
          <svg
            className={cn("w-5 h-5", style.icon)}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={style.iconPath}
            />
          </svg>
        </div>
        <div className="flex-1 space-y-2">
          {callout.title && (
            <h4 className="font-semibold text-sm">{callout.title}</h4>
          )}
          <div className="text-sm leading-relaxed">{callout.content}</div>
        </div>
      </div>
    </div>
  );
}

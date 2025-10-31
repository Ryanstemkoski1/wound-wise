"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrintButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
}

export function PrintButton({
  variant = "outline",
  size = "sm",
  className,
  children,
}: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handlePrint}
      className={cn("gap-2 no-print", className)}
      title="Print this page"
    >
      <Printer className="h-4 w-4" />
      {children || "Print"}
    </Button>
  );
}

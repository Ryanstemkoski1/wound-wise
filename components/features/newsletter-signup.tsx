"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "inline";
  className?: string;
}

export function NewsletterSignup({
  variant = "default",
  className,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate signup (no backend yet)
    setStatus("success");
    setMessage(
      "Thank you for your interest! Newsletter signup is coming soon."
    );
    setEmail("");

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  if (variant === "inline") {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            disabled={status === "success"}
          />
          <Button type="submit" disabled={status === "success"}>
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </form>
        {status !== "idle" && (
          <Alert
            className={`mt-3 ${
              status === "success" ? "border-primary" : "border-destructive"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="h-4 w-4 text-primary" />
            ) : (
              <AlertCircle className="h-4 w-4 text-destructive" />
            )}
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={className}>
        <div className="mb-3">
          <h3 className="font-semibold mb-1">Stay Updated</h3>
          <p className="text-sm text-muted-foreground">
            Get wound care tips and updates
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "success"}
          />
          <Button
            type="submit"
            className="w-full"
            size="sm"
            disabled={status === "success"}
          >
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </form>
        {status !== "idle" && (
          <Alert
            className={`mt-3 ${
              status === "success" ? "border-primary" : "border-destructive"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="h-4 w-4 text-primary" />
            ) : (
              <AlertCircle className="h-4 w-4 text-destructive" />
            )}
            <AlertDescription className="text-xs">{message}</AlertDescription>
          </Alert>
        )}
      </div>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <CardTitle>Stay Informed</CardTitle>
        </div>
        <CardDescription>
          Get the latest wound care tips, research updates, and helpful
          resources delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              disabled={status === "success"}
            />
            <Button type="submit" disabled={status === "success"}>
              Subscribe
            </Button>
          </div>
          {status !== "idle" && (
            <Alert
              className={
                status === "success" ? "border-primary" : "border-destructive"
              }
            >
              {status === "success" ? (
                <CheckCircle2 className="h-4 w-4 text-primary" />
              ) : (
                <AlertCircle className="h-4 w-4 text-destructive" />
              )}
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time. Newsletter
            functionality coming soon.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

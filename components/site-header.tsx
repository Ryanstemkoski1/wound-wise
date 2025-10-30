"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const woundTypes = [
  {
    title: "Pressure Injuries",
    href: "/wounds/pressure-injuries",
    description: "Bedsores caused by prolonged pressure on the skin",
  },
  {
    title: "Diabetic Ulcers",
    href: "/wounds/diabetic-ulcers",
    description: "Foot wounds related to diabetes complications",
  },
  {
    title: "Venous Ulcers",
    href: "/wounds/venous-ulcers",
    description: "Leg wounds from poor venous circulation",
  },
  {
    title: "Arterial Wounds",
    href: "/wounds/arterial-wounds",
    description: "Wounds caused by poor arterial blood flow",
  },
];

const treatments = [
  {
    title: "Wound Dressing",
    href: "/treatments/wound-dressing",
    description: "Selecting and applying appropriate dressings",
  },
  {
    title: "Infection Control",
    href: "/treatments/infection-control",
    description: "Preventing and managing wound infections",
  },
  {
    title: "Offloading & Positioning",
    href: "/treatments/offloading",
    description: "Pressure relief techniques and devices",
  },
  {
    title: "Nutrition & Healing",
    href: "/treatments/nutrition",
    description: "Dietary support for wound recovery",
  },
];

const resources = [
  {
    title: "Medical Glossary",
    href: "/resources/glossary",
    description: "Understand wound care terminology",
  },
  {
    title: "Product Guide",
    href: "/resources/products",
    description: "Recommended wound care products",
  },
  {
    title: "Wound Journal",
    href: "/resources/journal",
    description: "Track your healing progress",
  },
  {
    title: "FAQs",
    href: "/resources/faqs",
    description: "Common wound care questions",
  },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground group-hover:bg-primary/90 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <span className="font-bold text-xl">
              Wound<span className="text-primary">Wise</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Wound Types</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {woundTypes.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                    <li className="row-span-1 col-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/wounds"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-primary/10 to-primary/5 p-6 no-underline outline-none focus:shadow-md hover:bg-primary/10 transition-colors"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            View All Wound Types
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Comprehensive guides to understanding and treating
                            chronic wounds
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Treatment & Care</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {treatments.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {resources.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Dr. May
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <div>
                  <h3 className="mb-2 text-sm font-semibold">Wound Types</h3>
                  <div className="flex flex-col gap-2">
                    {woundTypes.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors",
                          pathname === item.href && "bg-accent"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <Link
                      href="/wounds"
                      onClick={() => setIsOpen(false)}
                      className="text-sm px-3 py-2 rounded-md bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                    >
                      View All →
                    </Link>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 text-sm font-semibold">
                    Treatment & Care
                  </h3>
                  <div className="flex flex-col gap-2">
                    {treatments.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors",
                          pathname === item.href && "bg-accent"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 text-sm font-semibold">Resources</h3>
                  <div className="flex flex-col gap-2">
                    {resources.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors",
                          pathname === item.href && "bg-accent"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Separator />

                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors",
                    pathname === "/about" && "bg-accent"
                  )}
                >
                  About Dr. May
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-sm focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

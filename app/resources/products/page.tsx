"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productsData from "@/content/products/recommendations.json";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types/content";

type Category =
  | "all"
  | "positioning"
  | "dressing"
  | "cleanser"
  | "nutrition"
  | "tool";

const categoryLabels: Record<Category, string> = {
  all: "All Products",
  positioning: "Positioning & Support",
  dressing: "Wound Dressings",
  cleanser: "Cleansers & Care",
  nutrition: "Nutrition Supplements",
  tool: "Tools & Supplies",
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  // Type-safe products
  const products = productsData.products as Product[];

  // Get unique categories from products
  const categories = useMemo(() => {
    const cats = new Set<string>();
    products.forEach((product) => cats.add(product.category));
    return ["all", ...Array.from(cats)] as Category[];
  }, [products]);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory, products]);

  // Get featured products
  const featuredProducts = useMemo(() => {
    return products.filter((product) => product.featured);
  }, [products]);

  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Products</span>
      </nav>

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Recommended Wound Care Products
        </h1>
        <p className="text-xl text-muted-foreground">
          Quality products to support your wound healing journey. These
          recommendations are based on clinical experience and wound care best
          practices.
        </p>
      </div>

      {/* Affiliate Disclosure */}
      <Card className="bg-accent/10 border-accent/30 mb-10">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Package className="h-6 w-6 text-accent shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-accent-foreground mb-2">
                Affiliate Disclosure
              </p>
              <p className="text-sm text-muted-foreground">
                WoundWise participates in the Amazon Associates Program. When
                you purchase products through our links, we may earn a small
                commission at no additional cost to you. This helps support our
                educational mission. All recommendations are based on clinical
                knowledge and wound care expertise.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setSelectedCategory(category)}
            >
              {categoryLabels[category]}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          Showing {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
          {selectedCategory !== "all" &&
            ` in ${categoryLabels[selectedCategory]}`}
        </p>
      </div>

      {/* Product Grid */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <Card>
            <CardContent className="pt-6 text-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No products found in this category.
              </p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Important Notice */}
      <Card className="bg-primary/5 border-primary/20 mt-12">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-primary mb-3">
            Important: Consult Your Healthcare Provider
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            These product recommendations are for educational purposes only.
            Always consult with your healthcare provider, wound care specialist,
            or physician before using any wound care products.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your healthcare team can assess your specific wound and recommend
            the most appropriate products for your individual situation. What
            works for one type of wound may not be suitable for another.
          </p>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Learn More About Wound Care</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">
                <Link
                  href="/wounds"
                  className="hover:text-primary transition-colors"
                >
                  Wound Types
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Understand different types of wounds and their specific care
                requirements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">
                <Link
                  href="/treatments"
                  className="hover:text-primary transition-colors"
                >
                  Treatment Strategies
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore evidence-based approaches to wound healing and
                management.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">
                <Link
                  href="/books"
                  className="hover:text-primary transition-colors"
                >
                  Dr. May&apos;s Books
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive guides to wound healing and patient journaling
                tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Positioning", value: "positioning" },
          { title: "Dressing", value: "dressing" },
          { title: "Cleanser", value: "cleanser" },
          { title: "Nutrition", value: "nutrition" },
          { title: "Tool", value: "tool" },
          { title: "Skincare", value: "skincare" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "useCases",
      title: "Use Cases",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "affiliateLink",
      title: "Affiliate Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "affiliatePartner",
      title: "Affiliate Partner",
      type: "string",
      options: {
        list: [
          { title: "Amazon", value: "amazon" },
          { title: "La Roche-Posay", value: "laroche-posay" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageUrl",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "externalImageUrl",
      title: "External Image URL (CDN)",
      type: "url",
      description: "Use this for Amazon or partner CDN images",
    }),
    defineField({
      name: "relatedWounds",
      title: "Related Wound Types",
      type: "array",
      of: [{ type: "reference", to: [{ type: "woundType" }] }],
    }),
    defineField({
      name: "relatedTreatments",
      title: "Related Treatments",
      type: "array",
      of: [{ type: "reference", to: [{ type: "treatment" }] }],
    }),
    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "imageUrl",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : "",
      };
    },
  },
});

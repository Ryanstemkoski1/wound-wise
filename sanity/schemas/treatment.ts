import { defineType, defineField } from "sanity";

export default defineType({
  name: "treatment",
  title: "Treatments",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "keyPrinciples",
      title: "Key Principles",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "steps",
      title: "Treatment Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "stepNumber",
              title: "Step Number",
              type: "number",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Step Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            },
            {
              name: "details",
              title: "Details",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "bestPractices",
      title: "Best Practices",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "warnings",
      title: "Warnings",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sections",
      title: "Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "callout",
              title: "Callout",
              type: "object",
              fields: [
                {
                  name: "type",
                  title: "Type",
                  type: "string",
                  options: {
                    list: [
                      { title: "Info", value: "info" },
                      { title: "Warning", value: "warning" },
                      { title: "Tip", value: "tip" },
                      { title: "Example", value: "example" },
                    ],
                  },
                },
                {
                  name: "content",
                  title: "Content",
                  type: "text",
                  rows: 3,
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "relatedWounds",
      title: "Related Wound Types",
      type: "array",
      of: [{ type: "reference", to: [{ type: "woundType" }] }],
    }),
    defineField({
      name: "relatedProducts",
      title: "Related Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "imageUrl",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "metaTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Dr. Alvin May",
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "datetime",
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
    }),
    defineField({
      name: "readingTime",
      title: "Reading Time (minutes)",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "imageUrl",
    },
  },
});

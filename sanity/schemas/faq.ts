import { defineType, defineField } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Wound Care", value: "wound-care" },
          { title: "Treatment", value: "treatment" },
          { title: "Products", value: "products" },
          { title: "Prevention", value: "prevention" },
        ],
      },
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
      title: "question",
      subtitle: "category",
    },
  },
});

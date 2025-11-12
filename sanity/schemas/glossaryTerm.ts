import { defineType, defineField } from "sanity";

export default defineType({
  name: "glossaryTerm",
  title: "Glossary Terms",
  type: "document",
  fields: [
    defineField({
      name: "term",
      title: "Term",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "term",
        maxLength: 96,
      },
    }),
    defineField({
      name: "definition",
      title: "Definition",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pronunciation",
      title: "Pronunciation",
      type: "string",
      description: "Optional pronunciation guide",
    }),
    defineField({
      name: "relatedTerms",
      title: "Related Terms",
      type: "array",
      of: [{ type: "reference", to: [{ type: "glossaryTerm" }] }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Wound Types", value: "wound-types" },
          { title: "Treatment", value: "treatment" },
          { title: "Anatomy", value: "anatomy" },
          { title: "Medical Terms", value: "medical-terms" },
          { title: "General", value: "general" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "term",
      subtitle: "definition",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: subtitle ? subtitle.substring(0, 60) + "..." : "",
      };
    },
  },
});

import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteMetadata",
  title: "Site Metadata",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "keywords",
      title: "Default Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "author",
      title: "Default Author",
      type: "string",
      initialValue: "Dr. Alvin May",
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "twitter", title: "Twitter", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
      ],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "logoUrl",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});

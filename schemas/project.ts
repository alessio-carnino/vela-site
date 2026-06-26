import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: r => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", description: 'e.g. "Fintech · Webflow"' }),
    defineField({ name: "image", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "url", title: "Project URL", type: "url" }),
    defineField({ name: "year", title: "Year", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});

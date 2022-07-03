import { IoDocumentTextSharp } from "react-icons/io5"

export default {
  name: "post",
  title: "News",
  type: "document",
  icon: IoDocumentTextSharp,
  fields: [
    {
      name: "isFeatured",
      title: "Feature this post",
      type: "boolean",
      options: {
        layout: "switch",
      },
      initialValue: false,
      validation: Rule => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "localeString",
      validation: Rule => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Make sure that the slug is the same in all translations",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "array",
      of: [{ type: "reference", to: { type: "team" } }],
      validation: Rule => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover",
      type: "richImage",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "category",
      title: "Publish in",
      type: "string",
      options: {
        list: [
          { title: "Press Release", value: "Press Release" },
          { title: "Blog", value: "Blog" },
          { title: "Partner News", value: "Partner News" },
          { title: "Press Coverage", value: "Press Coverage" },
        ],
        layout: "radio",
      },
      initialValue: "Blog",
      validation: Rule => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: Rule => Rule.required(),
      initialValue: new Date().toISOString(),
    },
    {
      name: "body",
      title: "Body",
      type: "localeBlockContent",
      validation: Rule => Rule.required(),
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
  preview: {
    select: {
      title: "title.en",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Published Date, Old",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
}

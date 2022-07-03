import { IoDocumentsSharp } from "react-icons/io5"

export default {
  title: "Pages",
  name: "customPage",
  type: "document",
  icon: IoDocumentsSharp,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
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
      name: "body",
      type: "localeBlockContent",
      title: "HTML Body",
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
    },
  },
}

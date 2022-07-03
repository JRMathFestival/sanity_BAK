import { IoPricetagSharp } from "react-icons/io5"

export default {
  name: "eventCategory",
  title: "Event Categories",
  type: "document",
  icon: IoPricetagSharp,
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
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "localeBlockContent",
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
}

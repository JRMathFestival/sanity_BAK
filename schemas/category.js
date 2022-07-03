import { IoPricetagSharp } from "react-icons/io5"

export default {
  name: "category",
  title: "Categories",
  type: "document",
  icon: IoPricetagSharp,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      validation: Rule => Rule.required(),
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

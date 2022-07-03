import { IoPeopleSharp } from "react-icons/io5"

export default {
  name: "team",
  title: "Team",
  type: "document",
  icon: IoPeopleSharp,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "localeString",
      validate: Rule => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      name: "position",
      title: "Position",
      type: "localeString",
    },
    {
      name: "isCoreMember",
      title: "Part of the core team",
      type: "boolean",
      options: {
        layout: "switch",
      },
      initialValue: false,
      validate: Rule => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "richImage",
      validate: Rule => Rule.required(),
    },
    {
      name: "bio",
      title: "Short bio",
      description: "To be displayed at the bottom of the posts",
      type: "localeBlockContent",
      validate: Rule => Rule.required(),
    },
    {
      name: "fullBio",
      title: "Full biography",
      description: "",
      type: "localeBlockContent",
    },
  ],
  preview: {
    select: {
      title: "name.en",
      media: "image.image",
    },
  },
}

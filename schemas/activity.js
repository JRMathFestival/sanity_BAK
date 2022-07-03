import { DateTime } from "luxon"
import { IoDocumentAttach, IoLinkSharp, IoRocketSharp } from "react-icons/io5"

export const link = {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    { type: "localeString", name: "title", title: "Title" },
    { type: "localeString", name: "url", title: "URL" },
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "url.en",
    },
    prepare(preview) {
      return {
        ...preview,
        media: IoLinkSharp,
      }
    },
  },
}

export const links = {
  name: "links",
  title: "Links",
  type: "array",
  of: [
    { type: "link", title: "Link" },
    {
      type: "richFile",
      title: "File",
    },
  ],
}

export const richFile = {
  type: "object",
  title: "File",
  name: "richFile",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      options: { isHighlighted: true },
    },
    {
      name: "file",
      title: "File",
      type: "file",
    },
  ],
  select: {
    title: "title",
    subtitle: "file",
  },
  prepare(preview) {
    console.log(preview)
    return {
      ...preview,
      media: IoDocumentAttach,
    }
  },
}

export const numberOfPlayers = {
  name: "numberOfPlayers",
  title: "Number of Players",
  type: "object",
  fields: [
    {
      title: "Minimum players",
      name: "minPlayers",
      type: "number",
      default: 1,
      validation: Rule => [
        Rule.required().min(1).error("At least one player is required"),
        Rule.integer().error("Should be an integer"),
      ],
    },
    {
      title: "Maximum players",
      name: "maxPlayers",
      type: "number",
      description: "Set to 99 if there is no upper limit",
      validation: Rule => [
        Rule.required().min(1).error("At least one player is required"),
        Rule.integer().error("Must be an integer"),
      ],
    },
  ],
}

export default {
  name: "activity",
  title: "Activities",
  type: "document",
  icon: IoRocketSharp,
  fields: [
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
      name: "isFeatured",
      title: "Feature this activity",
      type: "boolean",
      options: {
        layout: "switch",
      },
      initialValue: false,
      validation: Rule => Rule.required(),
    },
    {
      name: "language",
      title: "Language",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "English", value: "English" },
          { title: "Español", value: "Español" },
        ],
        layout: "radio",
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Release Date",
      type: "date",
      validation: Rule => Rule.required(),
      initialValue: DateTime.now().toISODate(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "richImage",
      validation: Rule => Rule.required(),
    },
    {
      name: "isLegacy",
      title: "Is it an old activity?",
      type: "boolean",
      validation: Rule => Rule.required(),
      initialValue: false,
    },
    {
      name: "format",
      title: "Format",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            title: "App",
            value: "App",
          },
          {
            title: "Slides",
            value: "Slides",
          },
          {
            title: "Printable",
            value: "Printable",
          },
        ],
        sortable: false,
      },
      initialValue: ["app"],
      validation: Rule => Rule.required(),
    },
    {
      name: "activity",
      title: "Activity",
      type: "string",
      options: {
        list: [
          {
            title: "Puzzle",
            value: "Puzzle",
          },
          {
            title: "Walking Maze",
            value: "Walking Maze",
          },
          {
            title: "Game",
            value: "Game",
          },
          {
            title: "Craft",
            value: "craft",
          },
          {
            title: "Booklet",
            value: "Booklet",
          },
        ],
        sortable: false,
      },
      validation: Rule => Rule.required(),
      initialValue: "Puzzle",
    },
    {
      name: "isMultiplayer",
      title: "Does this game support multiplayer?",
      type: "boolean",
      options: {
        layout: "switch",
      },
      initialValue: false,
      validation: Rule => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "description",
      title: "Description",
      type: "localeBlockContent",
    },
    {
      name: "links",
      title: "Links",
      type: "links",
    },
    {
      name: "app",
      title: "App Embed Link",
      type: "url",
      description: "Paste the link to the app",
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
      subtitle: "format",
      media: "coverImage.image",
    },
    prepare: ({ subtitle, ...preview }) => {
      return {
        ...preview,
        subtitle: subtitle.join(", "),
      }
    },
  },
}

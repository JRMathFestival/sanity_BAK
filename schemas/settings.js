import { IoLink, IoLinkSharp } from "react-icons/io5"
import React from "react"

const settings = {
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    {
      name: "redirects",
      title: "Link Forwarding (Redirection)",
      type: "array",
      of: [{ type: "redirect" }],
      validation: Rule => Rule.required(),
    },
  ],
}

export const redirect = {
  type: "object",
  name: "redirect",
  title: "Redirect",
  preview: {
    select: {
      title: "source",
      subtitle: "destination",
    },
    prepare(selection) {
      return {
        ...selection,
        media: <IoLinkSharp />,
      }
    },
  },

  fields: [
    {
      type: "string",
      name: "source",
      title: "Source",
      description: `The incoming request path pattern. Path matches are allowed, for example '/old-blog/:slug' will match '/old-blog/hello-world' (no nested paths). To match a wildcard path you can use * after a parameter, for example '/blog/:slug*' will match '/blog/a/b/c/d/hello-world'. To match a regex path you can wrap the regex in parentheses after a parameter, for example '/post/:slug(\\d{1,})' will match '/post/123' but not '/post/abc:'`,
    },
    {
      type: "string",
      name: "destination",
      title: "Destination",
      description: `The path you want to route to. Same matching rules apply as in the Source.`,
    },
    {
      type: "boolean",
      name: "permanent",
      title: "Permanent?",
      initialValue: true,
      description: `
      Indicates that the resource requested has been definitively moved to the new URL. A browser redirects to this page and search engines update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is sent to the new URL).
      `,
    },
  ],
}

export default settings

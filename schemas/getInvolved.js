export const getInvolvedLink = {
  name: "getInvolvedLink",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "slug",
      type: "string",
      hidden: "true",
      type: "slug",
      initialValue: {
        current: "get-involved",
      },
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
      validation: Rule => Rule.required(),
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "How you can help us", value: "you" },
          { title: "How we can help you", value: "we" },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "description",
      type: "localeString",
      title: "Brief Description",
    },
    {
      name: "icon",
      type: "richImage",
      title: "Icon",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
      description: `External links require full address, e.g. 'https://wikipedia.org', internal only relative, e.g. '/events'`,
      validation: Rule => Rule.uri({ allowRelative: true }),
    },
    {
      name: "isExternal",
      title: "Does this link lead to another website?",
      type: "boolean",
      options: {
        layout: "switch",
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
}

export default {
  name: "getInvolved",
  title: "Get Involved",
  type: "document",
  // __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "tagline",
      type: "localeString",
      title: "Tagline",
      validation: Rule => Rule.required(),
    },
    {
      name: "subtitle",
      type: "localeText",
      title: "Subtitle",
      validation: Rule => Rule.required(),
    },
    {
      name: "links",
      type: "array",
      title: "Links",
      of: [{ type: "getInvolvedLink" }],
      validation: Rule => Rule.required(),
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
}

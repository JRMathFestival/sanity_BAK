export default {
  name: "seo",
  title: "SEO",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "robots",
      type: "boolean",
      title: "Allow search engines to show this page in the search results?",
      initialValue: true,
      options: {
        layout: "switch",
      },
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
      description: "Write a descriptive, concise, and unique title.",
    },
    {
      name: "metaDescription",
      type: "localeText",
      title: "Meta Description",
      description:
        "A meta description tag should generally inform and interest users with a short, relevant summary of what a particular page is about. It's like a pitch that convinces the user that the page is exactly what they’re looking for.",
    },
  ],
}

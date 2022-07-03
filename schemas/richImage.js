export default {
  name: "richImage",
  title: "Image Asset",
  type: "object",
  preview: {
    select: {
      title: "alt.en",
      subtitle: "caption.en",
      media: "image",
    },
  },
  fields: [
    {
      name: "image",
      title: "File",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "caption",
      title: "Caption",
      type: "localeString",
    },
    {
      name: "alt",
      title: "Alt Description",
      type: "localeString",
      description:
        "Important for SEO and accessibility: describe what you see on the image in plain words.",
      options: {
        isHighlighted: true,
      },
    },
  ],
}

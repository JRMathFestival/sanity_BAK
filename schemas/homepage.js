export const socialMediaLink = {
  name: "socialMediaLinks",
  title: "Social Media Links",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "facebook",
      title: "Facebook",
      type: "localeString",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "localeString",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "localeString",
    },
    {
      name: "youtube",
      title: "YouTube",
      type: "localeString",
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "localeString",
    },
    {
      name: "pinterest",
      title: "Pinterest",
      type: "localeString",
    },
  ],
}

export const marketingBlock = {
  name: "marketingBlock",
  title: "Marketing Block",
  type: "object",
  fields: [
    {
      name: "icon",
      type: "richImage",
      title: "icon",
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "description",
      type: "localeText",
      title: "Description",
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
}

export const richVideo = {
  name: "richVideo",
  type: "object",
  title: "Rich Video",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: "video",
      title: "Muted and edited video file (MP4)",
      type: "file",
      accept: "video/mp4",
    },
    {
      name: "fullVideo",
      type: "url",
      title: "Full Video URL (YouTube / Vimeo)",
    },
  ],
}

export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "localeString",
    },
    {
      name: "video",
      title: "Background Video",
      type: "richVideo",
    },
    {
      name: "callToAction",
      title: "Call to Action",
      type: "array",
      of: [{ type: "link" }],
    },
    {
      name: "descriptionTitle",
      title: "Description Title",
      type: "localeString",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "marketingBlock",
        },
      ],
    },
    {
      title: "Featured",
      name: "featured",
      description: "List of links featured on the frontpage",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }, { type: "event" }, { type: "activity" }],
        },
      ],
      validation: Rule => Rule.max(6),
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
    {
      name: "social",
      title: "Social Media",
      type: "socialMediaLinks",
    },
  ],
}

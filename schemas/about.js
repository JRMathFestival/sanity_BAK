import { DateTime } from "luxon"

export const milestone = {
  type: "object",
  name: "milestone",
  title: "Milestone",
  preview: {
    select: {
      year: "year",
      subtitle: "description.en",
    },
    prepare({ year, subtitle }) {
      return {
        title: DateTime.fromISO(year).toLocaleString({ year: "numeric" }),
        subtitle,
      }
    },
  },
  fields: [
    {
      name: "year",
      title: "Year",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "localeText",
    },
  ],
}

export const report = {
  type: "object",
  title: "Report",
  name: "report",
  preview: {
    select: {
      year: "year",
      subtitle: "title.en",
    },
    prepare({ year, subtitle }) {
      return {
        title: DateTime.fromISO(year).toLocaleString({ year: "numeric" }),
        subtitle,
      }
    },
  },
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
      options: { isHighlighted: true },
    },
    {
      name: "year",
      type: "date",
      title: "Year",
      options: { dateFormat: "YYYY", isHighlighted: true },
    },
    {
      name: "file",
      title: "File",
      type: "file",
      options: {
        accept: ".pdf",
      },
    },
  ],
}

export const impactNumber = {
  type: "object",
  name: "impactNumber",
  title: "Impact Number",
  preview: {
    select: {
      title: "number",
      subtitle: "description.en",
    },
  },
  fields: [
    {
      name: "number",
      title: "Number",
      type: "number",
      validation: Rule => Rule.integer().required(),
    },
    { name: "prefix", title: "Prefix", type: "string" },
    {
      name: "description",
      title: "Description",
      type: "localeString",
      validation: Rule => Rule.required(),
    },
  ],
}

const schema = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      validation: Rule => Rule.required(),
    },
    {
      name: "carousel",
      type: "array",
      title: "Carousel",
      of: [{ type: "richImage" }],
      validation: Rule => Rule.required(),
    },
    {
      name: "mission",
      title: "Mission",
      type: "localeText",
      validation: Rule => Rule.required(),
    },
    {
      name: "impactTitle",
      title: "Impact Title",
      type: "localeString",
    },
    {
      name: "impact",
      type: "array",
      of: [{ type: "impactNumber" }],
      title: "Impact",
      validation: Rule => Rule.required(),
    },
    {
      name: "description",
      type: "localeBlockContent",
      title: "Description",
      validation: Rule => Rule.required(),
    },
    {
      name: "historyTitle",
      title: "History Title",
      type: "localeString",
    },
    {
      name: "history",
      type: "array",
      of: [{ type: "milestone" }],
      title: "History",
      validation: Rule => Rule.required(),
    },
    {
      name: "reportsTitle",
      title: "Reports Title",
      type: "localeString",
    },
    {
      name: "reports",
      type: "array",
      of: [
        {
          type: "report",
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: "contacts",
      type: "object",
      fields: [
        {
          name: "title",
          type: "localeString",
          title: "Title",
        },
        {
          name: "address",
          title: "Address",
          type: "localeBlockContent",
        },
        {
          name: "formLabels",
          type: "object",
          title: "Form Labels",
          fields: [
            {
              title: "Email",
              name: "email",
              type: "localeString",
            },
            {
              title: "Name",
              name: "name",
              type: "localeString",
            },
            {
              title: "Topic Select",
              name: "select",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Topic",
                  fields: [
                    { type: "localeString", name: "option", title: "Option" },
                    {
                      type: "localeString",
                      name: "email",
                      title: "Directed to (email)",
                    },
                  ],
                  preview: {
                    select: {
                      title: "option.en",
                      subtitle: "email.en",
                    },
                  },
                },
              ],
            },
            {
              title: "Message",
              name: "message",
              type: "localeString",
            },
            {
              title: "Send",
              name: "send",
              type: "localeString",
            },
            {
              title: "Sending",
              name: "sending",
              type: "localeString",
            },
            {
              title: "Thank you message",
              name: "thankYou",
              type: "localeText",
            },
            {
              title: "Go Back Label",
              name: "goBack",
              type: "localeString",
            },
          ],
        },
      ],
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO",
    },
  ],
}

export default schema

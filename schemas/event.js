import { kebabCase } from "lodash"
import { DateTime } from "luxon"
import { IoCalendarClearSharp } from "react-icons/io5"

export const dateRange = {
  name: "dateRange",
  type: "object",
  title: "Date Range",
  fields: [
    {
      name: "startDate",
      title: "Start Date & Time",
      type: "datetime",
    },
    {
      name: "endDate",
      title: "End Date & Time",
      type: "datetime",
    },
  ],
}

export default {
  name: "event",
  title: "Events",
  type: "document",
  icon: IoCalendarClearSharp,
  fields: [
    {
      name: "title", //-> To localeString
      title: "Title",
      type: "localeString",
      validation: Rule => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: Rule => Rule.required(),
      options: {
        source: doc =>
          `${DateTime.fromISO(doc.dateRange.startDate).toISODate()}-${kebabCase(
            doc.title
          )}`,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "localeBlockContent",
      validation: Rule => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "richImage",
    },
    {
      name: "dateRange",
      type: "dateRange",
      description: "Date timezones are local to you by default",
      validation: Rule => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "text", //
    },
    {
      name: "isClosed",
      title: "Is it an internal event?",
      type: "boolean",
      initialValue: false,
      options: {
        layout: "switch",
      },
    },
    {
      name: "eventCategory",
      type: "reference",
      to: [{ type: "eventCategory" }],
      title: "Event Category",
    },
    {
      name: "medium",
      type: "string",
      title: "Medium",
      options: {
        list: [
          { title: "Online", value: "Online" },
          { title: "In-Person", value: "In-Person" },
        ],
        layout: "radio",
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { title: "Festival", value: "Festival" },
          { title: "Conference", value: "Conference" },
          { title: "Presentation", value: "Presentation" },
          { title: "Social", value: "Social" },
        ],
        layout: "radio",
      },
    },
    {
      name: "host",
      type: "string",
      title: "Host",
      initialValue: "jrmf",
      options: {
        list: [
          { title: "JRMF", value: "JRMF" },
          { title: "Third-Party", value: "Third-Party" },
        ],
        layout: "radio",
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "age",
      type: "array",
      title: "Age",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Adults", value: "Adults" },
          { title: "Kids", value: "Kids" },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "audience",
      type: "array",
      title: "Audience",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Educators", value: "Educators" },
          { title: "Students", value: "Students" },
          { title: "Parents", value: "Parents" },
          { title: "Partners", value: "Partners" },
          { title: "Volunteers", value: "Volunteers" },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "language",
      type: "array",
      of: [{ type: "string" }],
      title: "Language",
      options: {
        list: [
          { title: "English", value: "English" },
          { title: "Spanish", value: "Español" },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        { type: "link" },
        {
          type: "richFile",
          title: "File",
        },
      ],
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
    {
      name: "registrationLink",
      title: "Registration Link",
      type: "link",
    },
  ],
  preview: {
    select: {
      title: "title.en",
      startDate: "dateRange.startDate",
      category: "eventCategory.title.en",
    },
    prepare({ category, title, startDate }) {
      const date = DateTime.fromISO(startDate).toLocaleString({
        dateStyle: "medium",
        timeStyle: "short",
      })
      if (!category) {
        category = "Event"
      }

      return {
        title,
        subtitle: category + " | " + date,
      }
    },
  },
  orderings: [
    {
      title: "Event Date, New",
      name: "eventDateDesc",
      by: [{ field: "dateRange.startDate", direction: "desc" }],
    },
    {
      title: "Event Date, Old",
      name: "eventDateAsc",
      by: [{ field: "dateRange.endDate", direction: "asc" }],
    },
  ],
}

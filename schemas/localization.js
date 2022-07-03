const locales = [
  {
    id: "en",
    title: "English",
  },
  { id: "es", title: "Spanish" },
]

const defaultLocale = "en"

export const localeString = {
  name: "localeString",
  title: "Localized String",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: locales.map(locale => ({
    title: locale.title,
    name: locale.id,
    type: "string",
    fieldset: locale.id === defaultLocale ? null : "translations",
  })),
}

export const localeBlockContent = {
  name: "localeBlockContent",
  title: "Localized Block Content",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: locales.map(locale => ({
    title: locale.title,
    name: locale.id,
    type: "blockContent",
    fieldset: locale.id === defaultLocale ? null : "translations",
  })),
}

export const localeText = {
  name: "localeText",
  title: "Localized Text",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: locales.map(locale => ({
    title: locale.title,
    name: locale.id,
    type: "text",
    fieldset: locale.id === defaultLocale ? null : "translations",
  })),
}

export default {
  name: "localization",
  type: "document",
  title: "Localization",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        {
          name: "navigation",
          title: "Navigation",
          type: "array",
          of: [{ type: "link" }],
        },
        {
          name: "callToAction",
          title: "Call to Action Button",
          type: "link",
        },
      ],
    },
    {
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        {
          name: "navigation",
          title: "Navigation",
          type: "array",
          of: [
            {
              name: "section",
              type: "object",
              preview: {
                select: {
                  title: "title.en",
                  links: "links",
                },
                prepare: ({ links, title }) => {
                  return {
                    title,
                    subtitle: links.map(link => link.title.en).join(", "),
                  }
                },
              },
              fields: [
                { type: "localeString", name: "title", title: "Section" },
                {
                  name: "links",
                  type: "array",
                  of: [{ type: "link" }],
                  title: "Links",
                },
              ],
            },
          ],
        },
        {
          name: "description",
          title: "Description",
          type: "localeText",
        },
        { name: "callToAction", type: "link", title: "Call to Action" },
        {
          name: "legal",
          title: "Legal Links",
          type: "array",
          of: [{ type: "link" }],
        },
      ],
    },
    {
      title: "Subscribe to Newsletter",
      type: "object",
      name: "newsletter",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "title",
          title: "Title",
          type: "localeString",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "localeText",
        },
        {
          name: "callToAction",
          title: "Call to Action",
          type: "localeString",
        },
      ],
    },
    {
      title: "Events Page",
      type: "object",
      options: {
        collapsible: true,
      },
      name: "eventsPage",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "localeString",
        },
        {
          title: "Search / Filter",
          name: "searchFilter",
          type: "object",
          fields: [
            {
              title: "Search Placeholder",
              name: "searchPlaceholder",
              type: "localeString",
            },
            {
              title: "Filters Label",
              name: "filtersLabel",
              type: "localeString",
            },
            {
              title: "Reset Button",
              name: "resetLabel",
              type: "localeString",
            },
            {
              title: "Date Range Label",
              name: "dateRangeLabel",
              type: "localeString",
            },
            {
              title: "Medium Label",
              type: "localeString",
              name: "typeLabel",
            },
            {
              title: "Host Label",
              type: "localeString",
              name: "hostLabel",
            },
            {
              title: "Language Label",
              type: "localeString",
              name: "languageLabel",
            },
            {
              title: "Age Label",
              type: "localeString",
              name: "ageLabel",
            },
            {
              title: "Audience Label",
              type: "localeString",
              name: "audienceLabel",
            },
          ],
        },
      ],
    },
    {
      title: "Activities Page",
      type: "object",
      name: "ActivitiesPage",
      options: {
        collapsible: true,
      },
      fields: [
        {
          title: "Title",
          name: "title",
          type: "localeString",
        },
        {
          title: "Search / Filter / Sort",
          name: "searchFilter",
          type: "object",
          options: {
            collapsible: true,
          },
          fields: [
            {
              title: "Search Placeholder",
              name: "searchPlaceholder",
              type: "localeString",
            },
            {
              title: "Filters Label",
              name: "filtersLabel",
              type: "localeString",
            },
            {
              title: "Reset Button",
              name: "resetLabel",
              type: "localeString",
            },
            {
              title: "Format Label",
              name: "formatLabel",
              type: "localeString",
            },
            {
              title: "Categories Label",
              name: "categoriesLabel",
              type: "localeString",
            },
            {
              title: "Activity Label",
              name: "activityLabel",
              type: "localeString",
            },
            {
              title: "Language Label",
              name: "languageLabel",
              type: "localeString",
            },
            {
              title: "Multiplayer Label",
              name: "multiplayerLabel",
              type: "localeString",
            },
            {
              title: "Recommended Label",
              name: "recommendedLabel",
              type: "localeString",
            },

            {
              title: "Sorting Labels",
              name: "sortingLabels",
              type: "object",
              fields: [
                {
                  type: "localeString",
                  name: "publishedAt_DESC",
                  title: "Published At (Descending)",
                },
                {
                  type: "localeString",
                  name: "publishedAt_ASC",
                  title: "Published At (Ascending)",
                },
                {
                  type: "localeString",
                  name: "title_DESC",
                  title: "Sort by Title (Descending)",
                },
                {
                  type: "localeString",
                  name: "title_ASC",
                  title: "Sort by Title (Ascending)",
                },
              ],
            },
            {
              title: "Filter Tabs",
              name: "filterTabs",
              type: "object",
              fields: [
                { type: "localeString", name: "all", title: "All" },
                {
                  type: "localeString",
                  name: "recommended",
                  title: "Recommended",
                },
                { type: "localeString", name: "apps", title: "Apps" },
                { type: "localeString", name: "booklets", title: "Booklets" },
              ],
            },
          ],
        },
      ],
    },
  ],
}

import type { Collection } from "tinacms";

export const HeaderCollection: Collection = {
  name: "header",
  label: "Menu",
  path: "tina/content/header",
  format: "json",
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "image",
    },
    {
      name: "header",
      label: "Menu",
      type: "object",
      list: true,
      fields: [
        {
          name: "linkName",
          label: "Texto Link",
          type: "string",
        },
        {
          name: "linkSection",
          label: "Link da Seção",
          type: "string",
        },
      ],
    },
  ],
};

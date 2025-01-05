import type { Collection } from "tinacms";

export const ServicesCollection: Collection = {
  name: "services",
  label: "Serviços",
  path: "tina/content/services",
  format: "json",
  fields: [
    {
      name: "services",
      label: "Serviços",
      type: "object",
      list: true,
      fields: [
        {
          name: "textItem",
          label: "Serviço",
          type: "string",
        },
        {
          name: "valueItem",
          label: "Serviço Valor",
          type: "string",
        },
      ],
    },
  ],
};

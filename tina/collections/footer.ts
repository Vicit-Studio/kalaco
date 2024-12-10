import type { Collection } from "tinacms";

export const FooterCollection: Collection = {
  name: "footer",
  label: "Rodapé",
  path: "tina/content/footer",
  format: "json",
  fields: [
    {
      name: "bgImg",
      label: "Imagem de Fundo",
      type: "image",
    },
    {
      name: "icon",
      label: "Icone",
      type: "image",
    },
    {
      name: "h2",
      label: "Headline",
      type: "string",
    },
    {
      name: "p",
      label: "SubHeadline",
      type: "string",
    },
    {
      name: "iconCopy",
      label: "Icone Logo",
      type: "image",
    },
    {
      name: "copyText",
      label: "Copywrith",
      type: "string",
    },
    {
      name: "network",
      label: "Redes Sociais",
      type: "object",
      list: true,
      fields: [
        {
          name: "iconNet",
          label: "Logo Rede Social",
          type: "image",
        },
        {
          name: "linkNet",
          label: "Link Rede Social",
          type: "string",
        },
      ],
    },
  ],
};

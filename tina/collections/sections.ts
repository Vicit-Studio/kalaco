import type { Collection } from "tinacms";

export const SectionsCollection: Collection = {
  name: "sections",
  label: "Seções",
  path: "tina/content/sections",
  format: "json",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      name: "hero",
      label: "Seção Inicial",
      type: "object",
      list: true,
      templates: [
        {
          name: "hero",
          label: "Hero",
          fields: [
            {
              name: "h1",
              label: "Headline",
              type: "string",
            },
            {
              name: "h4",
              label: "SubHeadline",
              type: "string",
            },
            {
              name: "btn",
              label: "Botão",
              type: "string",
            },
            {
              name: "btnLink",
              label: "Link Botão",
              type: "string",
            },
            {
              name: "bgImg",
              label: "Imagem de Fundo",
              type: "image",
            },
            {
              name: "logosClients",
              label: "Logos Clientes",
              type: "object",
              list: true,
              fields: [
                {
                  name: "image",
                  label: "Imagem",
                  type: "image",
                },
                {
                  name: "alt",
                  label: "Informação Imagem",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "problem",
      label: "Seção Problemas",
      type: "object",
      list: true,
      templates: [
        {
          name: "problem",
          label: "Problem",
          fields: [
            {
              name: "srcImg",
              label: "Imagem da Seção",
              type: "image",
            },
            {
              name: "h2",
              label: "Título da Seção",
              type: "string",
            },
            {
              name: "p",
              label: "Descrição",
              type: "string",
            },
            {
              name: "list",
              label: "Lista",
              type: "object",
              list: true,
              fields: [
                {
                  name: "iconList",
                  label: "Icone",
                  type: "image",
                },
                {
                  name: "itemList",
                  label: "Texto Item",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "services",
      label: "Seção Serviços",
      type: "object",
      list: true,
      templates: [
        {
          name: "services",
          label: "Services",
          fields: [
            {
              name: "h2",
              label: "Título da Seção",
              type: "string",
            },
            {
              name: "p",
              label: "Descrição",
              type: "string",
            },
            {
              name: "btn",
              label: "Botão",
              type: "string",
            },
            {
              name: "btnLink",
              label: "Link Botão",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

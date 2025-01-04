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
            {
              name: "inforService",
              label: "Informações do Serviço",
              type: "object",
              list: true,
              fields: [
                {
                  name: "imgService",
                  label: "Imagem do Serviço",
                  type: "image",
                },
                {
                  name: "nameService",
                  label: "Nome do Serviço",
                  type: "string",
                },
                {
                  name: "descriptionService",
                  label: "Descrição do Serviço",
                  type: "rich-text",
                  toolbarOverride: [
                    "heading",
                    "bold",
                    "italic",
                    "link",
                    "embed",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "benefits",
      label: "Seção Benefícios",
      type: "object",
      list: true,
      templates: [
        {
          name: "benefits",
          label: "Benefits",
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
            {
              name: "listBenefits",
              label: "Informações dos Benefícios",
              type: "object",
              list: true,
              fields: [
                {
                  name: "iconBenefits",
                  label: "Icone Benefício",
                  type: "image",
                },
                {
                  name: "nameBenefits",
                  label: "Nome do Benefício",
                  type: "string",
                },
                {
                  name: "descriptionBenefits",
                  label: "Descrição do Benefício",
                  type: "rich-text",
                  toolbarOverride: [
                    "heading",
                    "bold",
                    "italic",
                    "link",
                    "embed",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "method",
      label: "Seção Metodos",
      type: "object",
      list: true,
      templates: [
        {
          name: "method",
          label: "Method",
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
              name: "listMethod",
              label: "Informações dos Metodos",
              type: "object",
              list: true,
              fields: [
                {
                  name: "iconMethod",
                  label: "Icone Metodo",
                  type: "image",
                },
                {
                  name: "nameMethod",
                  label: "Nome do Metodo",
                  type: "string",
                },
                {
                  name: "descriptionMethod",
                  label: "Descrição do Metodo",
                  type: "rich-text",
                  toolbarOverride: [
                    "heading",
                    "bold",
                    "italic",
                    "link",
                    "embed",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

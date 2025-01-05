import type { Collection } from "tinacms";

export const FooterCollection: Collection = {
  name: "footer",
  label: "Rodapé",
  path: "tina/content/footer",
  format: "json",
  fields: [
    {
      name: "tel",
      label: "Telefone com DDD",
      type: "string",
    },
    {
      name: "message",
      label: "Mensagem Whatsapp",
      isBody: true,
      type: "rich-text",
      toolbarOverride: ["heading", "bold", "italic", "link", "embed"],
    },
    {
      name: "bgImg",
      label: "Imagem de Fundo",
      type: "image",
    },
    {
      name: "btn",
      label: "Texto Botão Sem Enviar",
      type: "string",
    },
    {
      name: "btnSend",
      label: "Texto Botão Enviando",
      type: "string",
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

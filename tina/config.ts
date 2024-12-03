import { defineConfig, LocalAuthProvider } from "tinacms";
import { TinaUserCollection } from "tinacms-authjs/dist/tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  authProvider: new LocalAuthProvider(),
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "/assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      TinaUserCollection,
      {
        name: "page",
        label: "Seções",
        path: "src/app",
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
                    name: "h2",
                    label: "Título da Seção",
                    type: "string",
                  },
                  {
                    name: "p",
                    label: "Descrição",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

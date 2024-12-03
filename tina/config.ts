import { defineConfig, LocalAuthProvider } from "tinacms";
import {
  TinaUserCollection,
  UsernamePasswordAuthJSProvider,
} from "tinacms-authjs/dist/tinacms";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
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
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
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

import { defineConfig } from "tinacms";

import {
  HeaderCollection,
  FooterCollection,
  SectionsCollection,
  ServicesCollection,
} from "./collections";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
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
      HeaderCollection,
      SectionsCollection,
      FooterCollection,
      ServicesCollection,
    ],
  },
});

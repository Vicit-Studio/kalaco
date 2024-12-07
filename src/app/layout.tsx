import "../styles/globals.css";

import type { Metadata } from "next";

import { TypeProvider } from "@/types";

import { poppins } from "@/functions";

export const metadata: Metadata = {
  title: {
    default: "Kalaço Jr",
    template: "Kalaço Jr | %s",
  },
  applicationName: "Kalaço Jr",
  description: "Marketing Digital focado em seus resultados !",
  authors: [{ name: "Vicit Studio", url: "https://vicit.studio" }],
  //Favicon
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  // SEO
  openGraph: {
    title: "Kalaço Jr - Marketing Digital",
    description:
      "Acreditamos no poder transformador daquilo que nos torna únicos.",
    url: "https://kalacojr.com.br/",
    siteName: "Kalaço Jr",
    images: [
      {
        url: "/screenshot.png",
        width: 800,
        height: 600,
      },
      {
        url: "/screenshot.png",
        width: 1800,
        height: 1600,
        alt: "Kalaço Jr",
      },
    ],
    locale: "pt-br",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalaço Jr - Marketing Digital",
    description:
      "Acreditamos no poder transformador daquilo que nos torna únicos.",
    images: "/screenshot.png",
  },
};

export default function RootLayout({ children }: TypeProvider) {
  return (
    <html lang="pt-br" className={`${poppins.className}`}>
      <body>{children}</body>
    </html>
  );
}

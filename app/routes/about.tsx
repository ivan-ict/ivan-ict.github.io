import type { Route } from "./+types/home";
import { SITE_METADATA } from "~/data/site-metadata";
import { AboutPage } from "~/about/page";

export function meta({}: Route.MetaArgs) {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: SITE_METADATA.title },
    { name: "description", content: SITE_METADATA.description },
    // Open Graph
    { property: "og:title", content: SITE_METADATA.title },
    { property: "og:description", content: SITE_METADATA.description },
    { property: "og:url", content: SITE_METADATA.siteUrl },
    { property: "og:site_name", content: SITE_METADATA.title },
    { property: "og:image", content: SITE_METADATA.socialBanner },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: "website" },
    // Twitter
    { name: "twitter:title", content: SITE_METADATA.title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: SITE_METADATA.socialBanner },
    // Theme colors
    {
      name: "theme-color",
      media: "(prefers-color-scheme: light)",
      content: "#fff",
    },
    {
      name: "theme-color",
      media: "(prefers-color-scheme: dark)",
      content: "#000",
    },
    { name: "msapplication-TileColor", content: "#000000" },
    // Robots
    { name: "robots", content: "index, follow" },
    {
      name: "googlebot",
      content:
        "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
    },
  ];
}

export default function About() {
  return <AboutPage />;
}

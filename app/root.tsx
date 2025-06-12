import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import clsx from "clsx";
import { TiltedGridBackground } from "~/components/ui/tilted-grid-background";
import { ThemeProviders } from "./theme-providers";
import { SITE_METADATA } from "~/data/site-metadata";
import { Header } from "./components/header";

// CSS imports
import "~/css/tailwind.css";
import "~/css/twemoji.css";
import "react-medium-image-zoom/dist/styles.css";
import "remark-github-blockquote-alert/alert.css";
import { KBarSearchProvider } from "./search/kbar-provider";
import { UmamiAnalytics } from "./components/analytics/umami";
import { Footer } from "./components/footer";

export const links: Route.LinksFunction = () => {
  const basePath = import.meta.env.VITE_BASE_PATH || "";

  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    // Google Fonts - recreating the Next.js font loading
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Playpen+Sans:wght@800&display=swap",
    },
    // Favicons
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: `${basePath}/static/favicons/favicon.ico`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: `${basePath}/static/favicons/favicon.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: `${basePath}/static/favicons/favicon.png`,
    },
    { rel: "manifest", href: `${basePath}/static/favicons/site.webmanifest` },
    {
      rel: "mask-icon",
      href: `${basePath}/static/favicons/safari-pinned-tab.svg`,
      color: "#5bbad5",
    },
    // RSS feed
    {
      rel: "alternate",
      type: "application/rss+xml",
      href: `${basePath}/feed.xml`,
    },
  ];
};

export const meta: Route.MetaFunction = () => {
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
};

export function Layout() {
  return (
    <html
      lang={SITE_METADATA.language}
      className={clsx(
        "w-full overflow-x-hidden scroll-smooth",
        // CSS variables for fonts
        "[--font-nunito:Nunito,sans-serif]",
        '[--font-jetbrains-mono:"JetBrains Mono",monospace]',
        '[--font-playpen-sans:"Playpen Sans",cursive]'
      )}
      suppressHydrationWarning
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className={clsx([
          "antialiased",
          "relative min-h-screen pl-[calc(100vw-100%)]",
          "flex flex-col",
          "bg-white text-neutral-900",
          "dark:bg-dark dark:text-gray-100",
          // Apply font families
          "font-[var(--font-nunito)]",
        ])}
      >
        <TiltedGridBackground className="inset-x-0 top-0 z-[-1] h-[50vh]" />
        <ThemeProviders>
          <UmamiAnalytics
            websiteId={SITE_METADATA.analytics.umamiAnalytics.websiteId}
          />
          <KBarSearchProvider configs={SITE_METADATA.search.kbarConfigs}>
            <Header />
            <main className="mb-auto grow">
              <Outlet />
            </main>
          </KBarSearchProvider>
          <Footer />
        </ThemeProviders>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-4xl font-bold mb-4">{message}</h1>
      <p className="text-lg mb-4">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto bg-gray-100 dark:bg-gray-800 rounded">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

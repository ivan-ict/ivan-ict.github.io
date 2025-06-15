import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./app.css";
import clsx from "clsx";
import { TiltedGridBackground } from "~/components/ui/tilted-grid-background";
import { ThemeProviders } from "./theme-providers";
import { SITE_METADATA } from "~/data/site-metadata";
import { Header } from "./components/header";
import { KBarSearchProvider } from "./search/kbar-provider";
import { UmamiAnalytics } from "./components/analytics/umami";
import { Footer } from "./components/footer";

// CSS imports
import "~/css/tailwind.css";
import "~/css/twemoji.css";
import "react-medium-image-zoom/dist/styles.css";
import "remark-github-blockquote-alert/alert.css";

export default function Layout() {
  return (
    <body
      className={clsx(
        "antialiased",
        "relative min-h-screen ps-[calc(100vw-100%)]", // Changed pl to ps
        "flex flex-col",
        "bg-white text-neutral-900/90", // Added opacity
        "dark:bg-dark dark:text-gray-100/90", // Added opacity
        "font-[var(--font-nunito)]",
        "transition-colors duration-200" // Added smooth theme transitions
      )}
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
  );
}

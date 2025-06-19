import type { Project } from "~/types/data";

export const PROJECTS: Project[] = [
  {
    type: "work",
    title: "Weaverse Hydrogen Customizer",
    description:
      "The first Hydrogen-driven website builder powered by AI. Weaverse is a Shopify sales channel that allows you to create a website in minutes with no coding required.",
    imgSrc: "/static/images/logo.jpg",
    url: "https://ivan-ict.github.io/?ref=ivan-ict.github.io",
    builtWith: ["Shopify", "Remix", "TailwindCSS", "Prisma", "OpenAI"],
    links: [
      {
        title: "Website",
        url: "https://ivan-ict.github.io/?ref=ivan-ict.github.io",
      },
      { title: "GitHub Org", url: "https://github.com/ivan-ict/" },
    ],
  },
  {
    type: "work",
    title: "Weaverse SDKs",
    description:
      "Open-source toolkits for seamless integration and development of Shopify Hydrogen themes and headless commerce solutions.",
    imgSrc: "/static/images/logo.jpg",
    repo: "weaverse/weaverse",
    builtWith: ["Turborepo", "Hydrogen", "React", "Typescript"],
  },
  {
    type: "work",
    title: "Pilot - Shopify Hydrogen theme",
    description:
      "A fully-featured Shopify Hydrogen theme crafted to help you launch modern, high-performing headless storefronts in minutes.",
    imgSrc: "/static/images/logo.jpg",
    repo: "weaverse/pilot",
    url: "https://ivan-ict.github.io/",
    builtWith: ["Hydrogen", "Remix", "TailwindCSS", "HeadlessUI"],
  },
  {
    type: "work",
    title: "Minimog - Next-gen Shopify theme",
    description:
      "The Next Generation of highest-converting and extensible Shopify theme (Weekly bestseller & Top trending in Themeforest eCommerce category).",
    imgSrc: "/static/images/logo.jpg",
    url: "https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968?ivan-ict.github.io",
    builtWith: ["ThemeKit", "Liquid", "Webpack", "TailwindCSS"],
    links: [
      { title: "Demo site", url: "https://ivan-ict.github.io/" },
      {
        title: "Envato item",
        url: "https://ivan-ict.github.io/",
      },
    ],
  },
  {
    type: "work",
    title: "FoxKit AIO Upsell Cross‑sell",
    description:
      "The upsells and boost conversion tools that is built to support Minimog theme.",
    imgSrc: "/static/images/logo.jpg",
    url: "https://ivan-ict.github.io/?ref=ivan-ict.github.io",
    builtWith: ["KoaJS", "JWT", "MongoDB", "Polaris"],
    links: [
      { title: "App store", url: "https://ivan-ict.github.io/" },
      {
        title: "Product site",
        url: "https://ivan-ict.github.io/",
      },
    ],
  },
  {
    type: "self",
    title: "ivan-ict.github.io",
    imgSrc: "/static/images/logo.jpg",
    repo: "ivan-ict/ivan-ict.github.io",
    builtWith: ["NextJS", "TailwindCSS", "Typescript", "Drizzle", "Umami"],
  },
  {
    type: "self",
    title: "Shopify theme starter",
    imgSrc: "/static/images/logo.jpg",
    repo: "ivan-ict/shopify-theme-starter",
    builtWith: ["ThemeKit", "Liquid", "Webpack", "TailwindCSS"],
  },
  {
    type: "self",
    title: "Exercism solutions",
    imgSrc: "/static/images/logo.jpg",
    repo: "ivan-ict/exercism-solutions",
    builtWith: ["Exercism", "Javascript", "Bash"],
  },
  {
    type: "self",
    title: "Animate loading bar",
    imgSrc: "/static/images/logo.jpg",
    repo: "ivan-ict/animate-loading-bar",
    builtWith: ["Javascript", "CSS"],
  },
  {
    type: "self",
    title: "Shopify KoaJS React boilerplate",
    imgSrc: "/static/images/logo.jpg",
    repo: "ivan-ict/shopify-koajs-react-boilerplate",
    builtWith: ["KoaJS", "JWT", "MongoDB", "Polaris"],
  },
  {
    type: "self",
    title: "Travel Egypt Picture Puzzle",
    imgSrc: "/static/images/logo.jpg",
    repo: "ivan-ict/Travel_Egypt",
    builtWith: ["Python", "Pygame"],
  },
  {
    type: "self",
    title: "Infinite Loading Gallery",
    imgSrc: "/static/images/logo.jpg",
    repo: "ivan-ict/infinite-gallery",
    builtWith: ["React", "SemanticUI", "Picsum"],
  },
  {
    type: "self",
    title: "Store Manager",
    imgSrc: "/static/images/logo.jpg",
    repo: "ivan-ict/StoreManager",
    builtWith: ["Java", "MySQL"],
  },
  {
    type: "self",
    title: "Tiny retry",
    imgSrc: "/static/images/logo.jpg",
    repo: "ivan-ict/tiny-retry",
    builtWith: ["Javascript", "Node"],
  },
];

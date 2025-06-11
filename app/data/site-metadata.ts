export const SITE_METADATA = {
  title: `Ivan's dev blog – stories, insights, and ideas`,
  author: "Ivan Trinh",
  headerTitle: `Ivan's dev blog`,
  description:
    "A personal space on the cloud where I document my programming journey, sharing lessons, insights, and resources for fellow developers.",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://ivan-ict.github.io/",
  siteRepo: "https://github.com/ivan-ict/ivan-ict.github.io",
  siteLogo: `${process.env.BASE_PATH || ""}/static/images/logo.jpg`,
  socialBanner: `${
    process.env.BASE_PATH || ""
  }/static/images/twitter-card.jpeg`,
  email: "ivantrinh.it@gmail.com",
  github: "https://github.com/ivan-ict",
  x: "",
  facebook: "",
  youtube: "",
  linkedin: "https://www.linkedin.com/in/ivantrinh/",
  threads: "",
  instagram: "",
  locale: "en-US",
  stickyNav: true,
  goodreadsBookshelfUrl: "",
  goodreadsFeedUrl: "",
  imdbRatingsList: "",
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl:
        "https://cloud.umami.is/share/7rqLvTMaEeAR81d3/ivan-ict.github.io",
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: "buttondown",
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "",
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || "",
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "",
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "",
      mapping: "title", // supported options: pathname, url, title
      reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
      metadata: "0",
      theme: "light",
      darkTheme: "transparent_dark",
      themeURL: "",
      lang: "en",
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ""}/search.json`,
    },
  },
  support: {
    buyMeACoffee: "",
    paypal: "",
    kofi: "",
  },
};

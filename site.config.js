const CONFIG = {
  // profile setting (required)
  profile: {
    name: "이지훈",
    image: "/me.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend developer",
    bio: "안녕하세요 이지훈입니다.오늘보다 더 발전된 내일을 위해 노력하는 부지런한 프론트 엔드 개발자입니다. 지금 제 모습에 안도하지 않고. 꾸준히 배우고 다른 사람들과 소통하며. 즐기는 개발자가 되겠습니다",
    email: "jihoon7705@gmail.com",
    linkedin: "%EC%A7%80%ED%9B%88-%EC%9D%B4-432907225/",
    github: "jiji-hoon96",
    instagram: "",
    medium: "@jihoon7705",
  },
  projects: [
    {
      name: `Panda`,
      href: "https://panda-vert.vercel.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "지후니네",
    description: "welcome to jihoon-log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }

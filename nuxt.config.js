export default defineNuxtConfig({
  css: ["@/assets/css/roboto.css", "@/assets/css/main.css"],

  modules: [
    "@nuxt/image",
    'nuxt-swiper',
    "@nuxtjs/tailwindcss", '@nuxtjs/seo',

    [
      "@storyblok/nuxt",
      {
        accessToken:'QyhbKwwwkYgsE8226xrqaAtt',
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
  ],

  ssr: process.env.NUXT_PUBLIC_NODE_ENV === "production" ? true : false,

  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      FROM_EMAIL: process.env.FROM_EMAIL,
      TO_EMAIL: process.env.TO_EMAIL,
      SUBJECT: process.env.SUBJECT,
      REPLY_TO_EMAIL: process.env.REPLY_TO_EMAIL
    }
  },

  site: {
    url: process.env.URL,
    name: 'Rock Solid Concrete',
    description: 'Website Description',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
});

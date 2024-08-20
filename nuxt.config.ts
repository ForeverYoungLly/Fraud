// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    // 该配置用于服务端请求转发
    routeRules: {
      "/api/**": {
        proxy: "https://sandbox.ti.qianxin.com/**",
      },
    },
  },
  devtools: { enabled: true },
});

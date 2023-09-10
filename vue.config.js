const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                @import "@/base/_variables.scss";
            `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cv/'
    : '/',
});

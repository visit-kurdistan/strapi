export default () => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 5 * 1024 * 1024, // 5MB
      },
    },
  },

  // nested populator
  "strapi-plugin-nested-populator": {
    config: {
      defaultDepth: 5, // 5 levels of depth
    },
  },
});

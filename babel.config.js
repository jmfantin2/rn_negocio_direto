module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            context: "./src/context",
            assets: "./assets",
            general: "./assets/general",
            utils: "./src/utils",
            helpers: "./src/helpers",
            services: "./src/services",
          },
        },
      ],
    ],
  };
};

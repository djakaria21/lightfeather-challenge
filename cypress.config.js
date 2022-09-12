const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  publicPath: "./",
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new PrerenderSPAPlugin({
          // Required - The path to the webpack-outputted app to prerender.
          staticDir: path.join(__dirname, "dist"),
          // Required - Routes to render.
          routes: ["/"]
        })
      );
    }
  }
};

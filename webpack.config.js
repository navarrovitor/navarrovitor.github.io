const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./lib/wagon_race.js"),
  output: {
    publicPath: "build",
    filename: "application.js"
  },
  devtool: "sourcemap"
};

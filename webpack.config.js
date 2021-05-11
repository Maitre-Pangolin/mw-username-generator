const path = require("path");

module.exports = {
  entry: "./namegenerator.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "namegenerator.bundle.js",
    library: {
      type: "umd",
      name: "essai",
    },
    globalObject: "this",
  },
};

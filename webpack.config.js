const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./example/index.js"),
  output: {
    path: path.resolve(__dirname, "./example/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
    alias: {
      "@ui-library": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./example/dist"),
  },
};

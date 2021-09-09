const path = require('path');
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "var",
    library: "BoringAvatars"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: "ts-loader"
    }]
  }
}

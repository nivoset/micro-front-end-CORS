const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = ({ mode }) => {
  return {
    mode,
    entry: './src/html/index.js',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
      // new CompressionPlugin({
      //   // asset: "[path].gz[query]",
      //   algorithm: "gzip",
      //   test: /\.js$|\.css$|\.html$/,
      //   threshold: 10240,
      //   minRatio: 0.8
      // }),
      new HtmlWebpackPlugin({
        template: './src/html/index.html'
      }),
      // new CopyPlugin([
      //   { from: "src/images", to: 'images' },
      //   { from: "src/manifest.json", to: '.' },
      //   { from: "src/offline.js", to: '.' },
      //   { from: "src/robots.txt", to: '.' },
      // ]),
    ],
    devtool: mode === 'development' ? 'source-map' : 'none' 
  };
};
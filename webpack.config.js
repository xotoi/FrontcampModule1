let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
  entry: ['babel-polyfill', './src/index.js'],
  devtool: 'eval-sourcemap',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.coffee?$/,
        loader: `transform-loader?coffeeify`,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
    ]
  }
};

module.exports = (env, options) => { 
  let production = options.mode === 'production';
  conf.devtool = production ? false : 'eval-sourcemap'
  return conf;
};
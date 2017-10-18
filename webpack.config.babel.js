import webpack from 'webpack';
import path from 'path';

export default {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'), // eslint-disable-line no-undef
    publicPath: 'http://localhost:3000/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    progress: true,
    hot: true,
    inline: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

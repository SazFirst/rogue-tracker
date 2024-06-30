import CopyPlugin from 'copy-webpack-plugin';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    background: './src/background.ts',
    content: './src/content.ts',
    inject: './src/inject.ts',
    injected: './src/injected.ts',
  },
  mode: 'none',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: 'manifest_chrome.json', to: 'manifest.json'},
        {from: './src/styles.css'},
        {from: './lib', to: 'lib'},
      ],
    }),
  ],
};

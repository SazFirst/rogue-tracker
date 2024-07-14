import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  target: 'webworker',
  entry: {
    background: './src/background.ts',
    content: './src/content.ts',
    inject: './src/inject.ts',
    injected: './src/injected.ts',
    end: './src/end.ts',
    injects: './src/inject_script.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{from: 'manifest_chrome.json', to: 'manifest.json'}, {from: './src/styles.css'}],
    }),
  ],
};

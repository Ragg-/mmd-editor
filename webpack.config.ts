import * as path from 'path'
import * as webpack from 'webpack'

const _DEBUG = !process.argv.includes('--release')
const _VERBOSE = process.argv.includes('--verbose')

const config: webpack.Configuration = {
  cache: _DEBUG,

  stats: {
    colors: true,
    reasons: _DEBUG,
    hash: _VERBOSE,
    version: _VERBOSE,
    timings: true,
    chunks: _VERBOSE,
    chunkModules: _VERBOSE,
    cached: _VERBOSE,
  },

  context: __dirname,

  entry: {
      'main': './main.ts',
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },

  resolve: {
      extensions: ['.js', '.ts'],
      modules: ['node_modules'],
  },

  module: {
      rules: [
          {
              test: /\.tsx?$/,
              loader: 'awesome-typescript-loader',
              exclude: /node_modules/,
          },
      ],
  },

  devServer: {
      contentBase: 'dist',
      port: 3000,
  },
}

export default config
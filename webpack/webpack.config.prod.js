const path = require("path");
const fs = require('fs');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Terser = require("terser");

console.log('Running with index file', process.env.INDEX_FILE);
const indexFile = process.env.INDEX_FILE == 'prod' ? 'web/app/index.html' : 'web/app/index_dev.html';

module.exports = {
  context: __dirname,

  // entry point of our app
  entry: {
    main: path.join(process.cwd(), 'web/app/app.js'),
  },
  output: {
      path: path.resolve('./web/app/build/prod'),
      publicPath: '/static/',
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 100000,
      minChunks: 2,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   children: true,
    //   minChunks: 2,
    //   async: true,
    // }),
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), indexFile),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/static/',
      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],
      caches: {
        main: [':rest:'],
        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],
      },
      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true,
      AppCache: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        // {
        //   from: path.join(process.cwd(), 'web/app/external/js'),
        //   transform: function(content, absoluteFrom) {
        //     var result = UglifyJS.minify(content.toString('utf-8'), {fromString: true});
        //     return result.error === undefined ? result.code : content;
        //   }
        // },
        // { from: path.join(process.cwd(), 'web/app/vendor') },
        { from: path.join(process.cwd(), 'web/app/external/images') }
      ]
    })
  ],
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/transform-runtime'],
          presets: ['@babel/env', '@babel/react'],
        }
      }
    },{
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
      ]
    },{
      test: /\.(eot|svg|ttf|woff|woff2|mp4)$/,
      loader: 'file-loader',
    },{
      test: /\.(jpg|png|gif|webp)$/,
      use: [
        { loader: 'file-loader' },
        {
          loader: 'image-webpack-loader',
          options: {
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4,
            },
            optipng: {
              optimizationLevel: 7,
            },
            gifsicle: {
              interlaced: false,
            },
            mozjpeg: {
              progressive: true,
            },
          },
        }
      ]
    },{
      test: /node_modules\/plotly.js/,
      loader: "ify-loader",
      enforce: "post"
    },{
      test: /node_modules\/gl-*/,
      loader: "ify-loader",
      exclude: /node_modules\/gl-error3d/,
      enforce: "post"
    }]
  },
  resolve: {
    modules: ['app','node_modules'],
    extensions: ['.js', '.jsx']
  },
  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
}

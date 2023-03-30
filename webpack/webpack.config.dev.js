const path = require("path");
const fs = require('fs');
const webpack = require('webpack');
const UglifyJS = require("uglify-js");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,

  // entry point of our app
  entry: {
    main: path.join(process.cwd(), 'web/app/app.js'),
  },
  output: {
      path: path.resolve('./web/app/build/dev/'),
      publicPath: '/static/',
      filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 100000,
      minChunks: 2,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
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
    // TODO: Might want to use DLL plugin here instead
    // TODO: Add hot module replacement https://webpack.js.org/guides/hmr-react/
    // TODO: Might also want to run with webpack dev server
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
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'web/app/index_dev.html'),
      inject: true,
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
  watchOptions: {
    ignored: /node_modules/
  }
};

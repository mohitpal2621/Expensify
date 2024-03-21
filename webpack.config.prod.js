const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map', // Better source maps for production
    optimization: {
        minimizer: [
            new TerserPlugin(), // Minify JavaScript
            new OptimizeCSSAssetsPlugin() // Minify CSS
        ]
    }
});

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }, {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, 
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
};

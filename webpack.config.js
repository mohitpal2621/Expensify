const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test'){
    console.log("WE ARE IN TEST");
    require('dotenv').config({ path: '.env.test' });
}else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({ path: '.env.development' });
}

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/' // This is important for correct asset loading in the browser
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        }, // This should point to your public directory
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
        }),
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_API_AUTHDOMAIN': JSON.stringify(process.env.FIREBASE_API_AUTHDOMAIN),
            'process.env.FIREBASE_API_PROJECTID': JSON.stringify(process.env.FIREBASE_API_PROJECTID),
            'process.env.FIREBASE_API_STORAGEBUCKET': JSON.stringify(process.env.FIREBASE_API_STORAGEBUCKET),
            'process.env.FIREBASE_API_MESSAGINGSENDERID': JSON.stringify(process.env.FIREBASE_API_MESSAGINGSENDERID),
            'process.env.FIREBASE_API_APPID': JSON.stringify(process.env.FIREBASE_API_APPID),
            'process.env.FIREBASE_API_MEASUREMENTID': JSON.stringify(process.env.FIREBASE_API_KEY),
        })
    ]
};

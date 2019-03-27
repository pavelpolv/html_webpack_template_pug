"use strict";
const path = require('path');
const itemPages = require('./pages');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "./css/style.css",
    disable: false,
    allChunks: true
});

const pluginArray = [];
pluginArray.push(extractSass);
pluginArray.push(new CopyWebpackPlugin([
    {from: 'src/scss', to: 'scss'},
    {from: 'src/img', to: 'img'}
]));

const min = { minify: { collapseWhitespace: true } };
itemPages.pages.forEach(function (item) {
    const prod = Object.assign(item, min);
    pluginArray.push( new HtmlWebpackPlugin(prod));
});

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, "../dist"),   // папка, в том числе, для HtmlWebpackPlugin
        filename: './js/app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'resolve-url-loader',
                        { loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths: [path.resolve(__dirname, '../node_modules')],
                                minimize: true,
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(gif|ico|png|jpe?g|svg|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        context: 'src/img/',
                        name: '[name].[ext]',
                        outputPath: '/img/',
                        emitFile: false
                    }
                }]
            },
            {test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000$name=fonts/[name].[ext]'},
            {test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]'},
            // pug
            {
                test: /\.pug$/,
                use: [{
                    loader: 'pug-loader',
                    options: {
                        pretty: true,
                        exports: false,
                        debug: true,
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: true,
                        collapseWhitespace: true
                    }
                }]
            }

        ]
    },
    plugins: pluginArray
}

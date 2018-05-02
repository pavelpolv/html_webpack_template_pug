const path = require('path');
var webpack = require('webpack');
const itemPages = require('./pages');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "./css/style.css",
    disable: true,
    allChunks: true
});
const pluginArray = [
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
];

itemPages.pages.forEach(function (item) {
    pluginArray.push( new HtmlWebpackPlugin(item));
});

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, "./dist"),   // папка, в том числе, для HtmlWebpackPlugin
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader'
                ]
            },
            {test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000$name=fonts/[name].[ext]'},
            {test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]'},
            // pug
            {
                test: /\.pug$/,
                use: ["html-loader", "pug-html-loader"]
            }
        ]
    },
    plugins: pluginArray
    ,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9001,
        stats: 'errors-only',
        open: true
    }
}

const path = require('path');
const itemPages = require('./pages');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "./css/style.css",
    disable: false,
    allChunks: true
});
const cssProd = extractSass.extract({
    use: [{
        loader: "css-loader", options: {minimize: true}
    }, {
        loader: "sass-loader", options: {minimize: true}
    }],
    // use style-loader in development
    fallback: "style-loader"
});
const pluginArray = [];
pluginArray.push(extractSass);

itemPages.pages.forEach(function (item) {
    pluginArray.push( new HtmlWebpackPlugin(item));
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
                test: /\.scss$/,
                use: cssProd
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
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
}

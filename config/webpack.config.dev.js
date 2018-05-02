const path = require('path');
const itemPages = require('./pages');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "./css/style.css",
    disable: false,
    allChunks: true
});
const cssConfig = extractSass.extract({
    use: [{
        loader: "css-loader", options: {minimize: false}
    }, {
        loader: "sass-loader", options: {minimize: false}
    }],
    // use style-loader in development
    fallback: "style-loader"
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
                use: cssConfig
            },
            {
                test: /\.(gif|ico|png|jpe?g|svg)$/i,
                // ?name=[path][name].[ext] - сохранили оригинальное имя и путь в папке dist: dist\src\images\pugjs.png
                //use: ["file-loader?name=[path][name].[ext]"]

                // ?name=[name].[ext]&outputPath=images/ - оригинальное имя сохранит в папке images: dist\images\pugjs.png
                use: ["file-loader?name=[name].[ext]&outputPath=img/",
                ]
            },
            {test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000$name=fonts/[name].[ext]'},
            {test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]'},
            // pug
            {
                test: /\.pug$/,
                use: ["html-loader",  {
                    loader: 'pug-html-loader',
                    options: {
                        pretty: true,
                        exports: false,
                        debug: true,
                        compileDebug: true,
                        doctype: 'html'
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        removeComments: true,
                        collapseWhitespace: true
                    }
                }]
            }

        ]
    },
    plugins: pluginArray
}

/// <binding ProjectOpened='Watch - Development' />
var path = require("path");
var webpack = require("webpack");
var WebpackNotifierPlugin = require("webpack-notifier");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        wphr: "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
        main: "./wwwroot/js/main.js",
        test: "./wwwroot/js/test.js"
    },
    output: {
        path: path.resolve(__dirname, "./wwwroot/js/dist"),
        publicPath: "/wwwroot/js/dist/",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        i18n: "@kazupon/vue-i18n-loader"
                    }
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader",
                enforce: "pre"
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': "vue/dist/vue.esm.js",
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery"
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: "#eval-source-map",
    plugins: [
        new WebpackNotifierPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

if (process.env.NODE_ENV === "Production") {
    module.exports.devtool = "#source-map";
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"Production"'
            }
        }),
        new UglifyJSPlugin({
            minimize: true,
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}

/* 
output: { http://www.sochix.ru/how-to-integrate-webpack-into-visual-studio-2015/  
        path: path.join(__dirname, "./dist"),
        filename: "[name].js"
 }*/
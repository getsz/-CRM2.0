var webpack = require("webpack");
var AssetsPlugin = require("assets-webpack-plugin");
var path = require("path");
var constant = require("./constant");

module.exports = {
    entry: {
        "lib": constant.libVendor
    },
    output: {
        path: path.resolve(__dirname, constant.devLibPath),
        filename: "[name]." + constant.timeStamp + ".js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, constant.libConfig, "manifest-lib.json"),
            name: "[name]",
            context: __dirname
        }),
        new AssetsPlugin({
            path: __dirname,
            filename: constant.libConfig + "lib-config.json"
        })
    ]
};
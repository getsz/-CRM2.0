var timeStamp = (new Date()).getTime() + "";

module.exports = {
    timeStamp: timeStamp,
    publicPath: "",//"./dist/",
    releaseDir: "../release/",
    srcDir: "../src/",
    devLibPath: "../public/lib",
    releaseLibPath: "../release/lib",
    libConfig: "./lib/",
    reactVendor: [
        "react",
        "react-immutable-render-mixin",
        "react-dom",
        "react-transition-group",
        "react-router",
        "react-router-dom",
        "redux",
        "redux-thunk",
        "react-redux"
    ],
    libVendor: [
        "babel-polyfill",
        "immutable",
        "react-fastclick"
        // "echarts/lib/echarts",
        // "echarts/lib/chart/line",
        // "echarts/lib/chart/lines",
        // "echarts/lib/chart/pie"
    ],
    lessAutoPrefixConfig: [
        "last 2 Chrome versions",
        "ie >= 8",
        "Firefox >= 20",
        "iOS 7",
        "> 5%"
    ]
}
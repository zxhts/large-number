const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "none",
    entry: {
        'large-number': './src/index.js',
        'laege-number.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        // library: {
        //     // target: 'umd',
        //     // name: 'MyLibrary',
        //     // export: 'umd'
        //     name: 'Mylibray',
        //     type: 'umd'
        // },
        library: 'largeNumber',
        // libraryTarget: 'umd',
        libraryTarget: 'umd',
        libraryExport: 'testModule'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ]
}
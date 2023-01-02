const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: "index.html",
    })],
    devServer: {
        compress: true,
        port: 9000,
        watchFiles:['*.html']
    },
};

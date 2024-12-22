var path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode:  'production',
    entry: './index.js',
    output: {
        filename: 'bip39-libs.js',
        path: path.resolve(__dirname, '../../src/js/'),
        libraryTarget: 'var',
        library: 'libs'
    },
    plugins: [
        new NodePolyfillPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
};

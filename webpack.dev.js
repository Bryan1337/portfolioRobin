const commonWebpackConfig = require('./webpack.common.js');
const path = require('path');

module.exports = {
    ...commonWebpackConfig,
    entry: [
        '@babel/polyfill',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/portfolio_robin.[name].js',
        chunkFilename: 'js/portfolio_robin.[name].js',
    },
    mode: 'development',
    devtool: 'source-map',
    watchOptions: {
        ignored: [
            '**/node_modules',
            '**/assets/**'
        ],
        followSymlinks: true,
        aggregateTimeout: 200,
    },
    devServer: {
        historyApiFallback: true,
        port: 1234,
        hot: true,
    },
    plugins: [
        ...commonWebpackConfig.plugins,
    ]
};
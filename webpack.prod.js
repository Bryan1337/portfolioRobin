const commonWebpackConfig = require('./webpack.common.js');
const { EsbuildPlugin } = require('esbuild-loader');
const path = require('path');

module.exports = {
    ...commonWebpackConfig,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/portfolio_robin.[id].js',
        chunkFilename: 'js/portfolio_robin[name].[contenthash].js',
        clean: true,
    },
    stats: {
        all: false,
        assets: true,
        assetsSort: "!size",
        errors: true,
        builtAt: false,
    },
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            new EsbuildPlugin({
                target: 'es2015',
                css: true,
            })
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
};

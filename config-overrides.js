const { ProvidePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer'),
    };


    config.plugins.push(
        new ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser',
        }),
    );
    config.ignoreWarnings = [/Failed to parse source map/];

    return config;
};
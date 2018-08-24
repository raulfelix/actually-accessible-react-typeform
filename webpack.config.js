const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    const devServer = {
        port: 3000,
        publicPath: '/dist',
        open: true,
        inline: true,
        hot: true,
        contentBase: ['./', '../../dist/', path.resolve(__dirname, './src/**')],
        watchContentBase: true
    };

    const config = {
        mode: 'development',
        resolve: {
            modules: [path.resolve('./src'), path.resolve('./node_modules')]
        },
        devtool: 'eval',
        entry: {
            app: ['./src/js/index.js']
        },
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: '[name].js'
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('development')
                }
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx|mjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'env', 'stage-2']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        devServer
    };

    return config;
};

const path = require('path');

module.exports = {

    entry: {
        index: './src/index.ts'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'InversifyReact',
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'source-map',

    module: {
        rules: [
            { 
                test: /\.(ts|tsx)$/, 
                use: 'ts-loader'
            }
        ]
    },

    externals: {
        "react": {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React"
        },
        "inversify": {
            commonjs: "inversify",
            commonjs2: "inversify",
            amd: "inversify",
            root: "Inversify"
        }
    }
};
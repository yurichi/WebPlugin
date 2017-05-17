const path = require('path');
const { WebPlugin, AutoWebPlugin } = require('web-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    entry: {
        A: './a',
        B: './b',
    },
    plugins: [
        new WebPlugin({
            filename: 'index.html',
            requires: ['A', 'B'],
        }),
    ]
};
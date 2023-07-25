const path = require('path');

module.exports = {
    entry: './amd/stories.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: [".ts", ".js"]
    },
    mode: 'none'
};
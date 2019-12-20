const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif|mp4)$/,
                use: [
                        'file-loader',
                ]
            }
        ]
    }
}
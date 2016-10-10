var config = {
    target: 'node',
    entry: './src/index.ts',
    output: {
        filename: 'dist/index.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
        { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    externals : {
    }
};

module.exports = config;
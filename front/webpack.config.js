const path = require('path');

module.exports = {
    // mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                // use: 'ts-loader',
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            { 
                test: /.html$/, 
                loader: "html-loader", 
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, 'dist')
    },
};
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,//除去node_modules文件路径下的js，不需要编译的
                loader: 'babel-loader'
            }
        ]
    }
}
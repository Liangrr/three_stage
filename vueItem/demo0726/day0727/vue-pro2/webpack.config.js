module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: 'dist/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}
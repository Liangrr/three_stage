const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(HtmlWebpackPlugin);

//HtmlWebpackPlugin在webpack编译好js文件之后，读取template对应的html文件
// 将编译好的js创建script引入在html文件的body结束标签之前。
// 生成新的html文件，新建存放路径output.path,文件名字是filename设置的名字
let htmlPlugin = new HtmlWebpackPlugin({
    template: './indexTmp.html',
    filename: 'index.html'
});


module.exports = {
    // 入口文件的配置
    // string/object
    entry: {
        app: './src/main.js',
        swiper: './src/plugin.js'
    },
    output: {
        path: __dirname,
        filename: 'dist/[name][hash:7].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './indexTmp.html',
            filename: 'index.html'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader'
            }
        ]
    }
}
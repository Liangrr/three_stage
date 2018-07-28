// 向外输出webpack的编译规则的配置项
// webpack执行时，先读取这个文件的输出配置项。安照这个编译规则编译。
module.exports = {
    // 编译的入口文件
    entry: './src/main.js',
    //输出的配置
    output: {
        //输出路径
        path: __dirname+'/dist',
        //编译好的js的文件名字
        filename: 'bundle.js'
    },
    //配置使用的模块
    module: {
        //配置使用的加载器
        loaders: [
            {
                //需要处理的文件，正则跟文件路径匹配
                test: /\.css$/,
                // 使用的loader
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|ttf|svg)$/,
                loader: 'url-loader'
            }
        ]
    }
}


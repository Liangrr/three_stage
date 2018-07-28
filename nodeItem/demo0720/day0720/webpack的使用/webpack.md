通过npm全局安装的工具
C:{管理员账号路径}\AppData\Roaming\npm



全局安装webpack
npm install webpack@3 -g
npm install webpack-dev-server@2 -g



本地安装
npm install webpack@3 -D
npm install webpack-dev-server@2 -D


执行webpack的方式：
方式1：
    执行命令：
    >webpack <编译文件路径> <输出文件路径>
方式2：
    在项目根路径下，创建文件：webpack.config.js  webpack的配置文件
    执行命令：
    >webpack
    修改配置文件的名字
    >webpack --config webpack.config.build.js
    >webpack --config=webpack.config.build.js
    查看编译的进度
    >webpack --progress
    混淆压缩代码
    >webpack -p

启动服务：
    >webpack-dev-server --config=webpack.config.dev.js -p -progress
    dev-server独有的参数：
    >webpack-dev-server --host=10.36.142.68 --port=8888 --open

webpack的功能：
1.对commonJS规范模块化的代码进行编译。

2.编译css
    需要加载器
    css-loader：识别css文件，style样式标签 
    style-loader:识别样式的内容
    >npm install css-loader@0.28 style-loader -D
    sass-loader

3.编译普通文件的loader
    url-loader/file-loader
    >npm install url-loader -D

4.编译es6
    babel-loader: es6  jsx    
    >npm install babel-loader babel-core -D 

    //插件
    npm i babel-plugin-es2015-const
    npm i babel-plugin-es2015-let
    npm i babel-plugin-es2015-arrow-function
    npm i babel-plugin-es2015-rest
    //预设：包含了多个一种类型的插件
    npm i babel-preset-es2015 -D

    babel的配置文件
    .babelrc

    解析es6的函数或者类：
        Set
        Map
        Promise
        Array.from
    使用babel-preset-es2015/babel-preset-env不能解析
    解决方式：
    方式1：babel-polyfill
    全局的，对全局的变量进行定义。为开发应用(插件，框架)做准备
    npm install babel-polyfill -S

    方式2 babel-plugin-transform-runtime
    编译时解析的，外开发项目框架准备
    npm install babel-plugin-transform-runtime -D
    


编译html
cnpm install html-webpack-plugin -D

    









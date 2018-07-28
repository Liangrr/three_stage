javascript    window
gulp ----  前端工程构建工具
webpack   ----  前端工程构建工具



java  Python  php：后台     本地电脑，服务器

node   本地或服务端运行的javascript运行环境。

nodeJS和JavaScript区别？
js：前台，浏览器
    ecmaJavaScript
    DOM  
    BOM

node：后台（操作系统）
    ecmaJavaScript
    os：操作系统
    file：文件操作
    net：网络操作
    database：数据库操作
    ....

node功能：
    web服务器
    应用
    前端构建工具


node安装稳定版本
node操作命令：
    node -v 查看版本
    node    执行node的代码
    .exit   退出node执行

node执行文件
    >node 系统绝对路径
    >node 相对路径



    


模块化开发：面向对象思想
模块：一个js文件就是一个模块,模块输出就是一个对象，每个模块都有自己的独立作用域


模块化开发的方式：
commonJS规范（node.js）
一个js文件就是一个模块，每个模块都有自己的作用域.
引入模块：require('路径')
向外输出模块内容 module.exports = 向外输出的内容;
前端中使用commonJS规范编写代码，需要使用工具编译


AMD（require.js 依赖前置）
CMD (sea.js 按需引入)


es6模块化方式(ESM)
现代浏览器不支持es6模块化方式，需要使用工具编译
import {}
export
export default





node中模块化的路径写法：
require('路径')中路径的写法：
require('a.js');   //node_modules文件夹中，或者node内置模块
require('./a.js'); //当前路径
require('../a.js'); //返回上一层
require('/a.js'); //根目录






文件操作
const fs = require('fs');

//文件内容操作
readFile
writeFile
appendFile

//操作文件
unlink
rename
stat

mkdir
rmdir
readdir

---------------------------------------------

url：对请求url地址的操作
parse
format

querystring：对url中参数的操作
parse
stringify
escape
unescape



http :发送请求
发送请求
http
https
post get
var request = http.request(options, (response)=>{
    response.on('data', ()=>{});
    response.on('end', ()=>{});
})
request.on('error', ()=>{});
request.write(postData);
request.end();




响应请求
var server = http.createServer();

server.on('error'()=>{});
server.on('listening'()=>{});
server.on('request'(request, response)=>{});

server.listen(端口，地址);





// 引入express
const express = require('express');

//创建服务器
const server = express();
//等价于http.createServer();

//处理请求get，post
//参数1：需要处理的请求路径url.pathname
//参数2：处理请求的函数
server.get('/', (request, response)=>{
    console.log('得到了"/"的请求');
    response.end('home');
});
// server.post();




// 启动服务器
server.listen(8080, 'localhost', (error)=>{
    if(error){
        console.log('服务器启动失败');
        console.log(error);
    }else{
        console.log('服务器启动成功...,请访问http://localhost:8080');
    }
})
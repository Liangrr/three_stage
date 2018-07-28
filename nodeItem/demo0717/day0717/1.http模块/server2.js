const http = require('http');


const handleReq = require('./handleRequest');

/*
一个完整的http事务过程:
1.客户端（网页，应用，ios，android。。。。）发送请求给服务器
2.服务器接收请求
3.对请求进行分析处理
4.响应客户端
5.客户端得到响应，处理数据
*/


// 创建服务器
const server = http.createServer();

//接收请求
server.on('request', handleReq);

server.on('listening', ()=>{
    console.log('服务器启动，你可以通过http://10.36.142.53:8080访问.');
})

//启动监听，服务器开始工作了
// server.listen(8080, 'localhost');
server.listen(8080, '10.36.142.53');


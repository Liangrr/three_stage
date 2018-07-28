const express = require('express');
const swig = require('swig');
const url = require('url');
const bodyParser = require('body-parser');

// 创建服务器
const server = express();

//配置模板引擎
server.set('views', './www');
server.set('view engine', 'html');
server.engine('html', swig.renderFile);
swig.setDefaults({cache: false});

server.get('/', (req, res)=>{
    res.render('index');
})

//让服务使用中间件处理请求。
// 参数1:请求的url中的一段从头开始匹配路径
// 参数2:中间件:函数处理方法
server.use('/api', (req, res, next)=>{
    /*
        req:请求对象
        res：响应对象
        next:下一步操作
    */ 
   let urlObj = url.parse(req.url, true);

   req.query = urlObj.query;

   next();
});

//使用第三方的中间件
console.log(bodyParser());
server.use('/api', bodyParser());



server.post('/api/register', (req, res)=>{
    console.log('接收到了请求');
    //分析请求参数username password
    console.log(req.url);
    //注册的逻辑
    console.log(req.body);
})
server.post('/api/login', (req, res)=>{
    console.log('接收到了请求');
    //分析请求参数username password
    console.log(req.url);
    //登录的逻辑
    console.log(req.body);
})

server.get('/api/userInfo', (req, res)=>{
    console.log('接收到了请求');
    //分析请求参数userid
    console.log(req.url);
    //根据id查询用户信息
    console.log(req.query);
})

server.get('/api/friendList', (req, res)=>{
    console.log('接收到了请求');
    //分析请求参数userid
    console.log(req.url);
    console.log(req.query);
})

//.......

// 启动服务器
server.listen('8080', 'localhost', (error)=>{
    if(error){
        console.log('启动失败');
    }else{
        console.log('启动成功');
    }
})


const express = require('express');
const swig = require('swig');
const httpProxyMiddleware = require('http-proxy-middleware');

// 创建服务器
const server = express();

server.use('/bundle', express.static('./bundle'));

//配置模板引擎
server.set('views', './');
server.set('view engine', 'html');
server.engine('html', swig.renderFile);
swig.setDefaults({cache: false});

server.get('/', (req, res)=>{
    res.render('index');
})



//2.node.js代理中间件:http-proxy-middleware 
server.use('/v4', httpProxyMiddleware({
    target: 'https://m.maizuo.com',//代理的地址
    changeOrigin: true//修改域名
}));



// 启动服务器
server.listen('8080', 'localhost', (error)=>{
    if(error){
        console.log('启动失败');
    }else{
        console.log('启动成功');
    }
})


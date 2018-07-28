const express = require('express');
const swig = require('swig');
const url = require('url');
const bodyParser = require('body-parser');
const https = require('https');
const httpProxyMiddleware = require('http-proxy-middleware');

// 创建服务器
const server = express();

//配置模板引擎
server.set('views', './www');
server.set('view engine', 'html');
server.engine('html', swig.renderFile);
swig.setDefaults({cache: false});

server.get('/', (req, res)=>{
    res.render('douban');
})

/*
server.use('/v2', (req, res, next)=>{
    console.log('/v2'+req.url);
    // 创建请求
    https.request({
        hostname: 'api.douban.com',
        port: 443,
        path: '/v2'+req.url
    }, (response)=>{
        let value = '';
        //得到响应，开始接收数据
        response.on('data', (bf)=>{
            value += bf;
        })
        response.on('end', ()=>{
            // res.end(value);
            res.json(JSON.parse(value));//结束请求，响应客户端
        })

    })
    //发送请求
    .end();
})
*/

//2.node.js代理中间件:http-proxy-middleware 
server.use('/v2', httpProxyMiddleware({
    target: 'https://api.douban.com',//代理的地址
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


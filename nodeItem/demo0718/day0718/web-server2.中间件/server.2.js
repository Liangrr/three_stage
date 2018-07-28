const express = require('express');
const swig = require('swig');
const url = require('url');
const bodyParser = require('body-parser');

// 创建服务器
const server = express();

// /api/goods/category
server.use('/api', (req,res,next)=>{
    //当请求进入use之后，参数1匹配的路径会被删除。

    console.log('拦截了1');

    console.log(req.url);

    next();
    //调用next到下一个函数执行，被删除的匹配的参数1的路径又会被加上。
})

server.use('/api', (req,res,next)=>{
    console.log('拦截了2');
    console.log(req.url);
    next();
})


// server.use('/', (req,res,next)=>{
//     console.log('拦截了3');
//     next();
// })

server.get('/api/goods/category', (req,res)=>{
    console.log('处理请求了');
})



// 启动服务器
server.listen('8080', 'localhost', (error)=>{
    if(error){
        console.log('启动失败');
    }else{
        console.log('启动成功');
    }
})


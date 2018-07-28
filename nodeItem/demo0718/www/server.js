const express = require('express');
const swig =  require('swig');
const fs = require('fs');

// 创建服务器
const server = express();
server.set('view','./www');
server.set('view engine','html');

server.use('/',(req,res)=>{

});

// 开启服务器
server.listen(8282, 'localhost', (error)=>{
    if(error){
        console.log('服务器出错');
    }else{
        console.log('服务器启动成功,请访问:http://localhost:8282');
    }
})



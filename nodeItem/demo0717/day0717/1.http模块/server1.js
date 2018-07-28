const http = require('http');
const https = require('https');
const fs = require('fs');
const url = require('url');

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
server.on('request', (request, response)=>{
    //request客户端的请求对象
    // response 服务器将要响应给客户端的响应对象

    
    //对请求进行分析处理
    let urlObj = url.parse(request.url);
    console.log(urlObj.pathname);

    //分析请求
    let data = '';
    if(urlObj.pathname == '/home' || (urlObj.pathname == '/')){
        data = fs.readFileSync('./www/home.html');
    }
    else if(urlObj.pathname == '/list'){
        data = fs.readFileSync('./www/list.html');
    }
    else if(urlObj.pathname == '/css/home.css'){
        data = fs.readFileSync('./www/css/home.css');
    }
    else if(urlObj.pathname == '/js/home.js'){
        data = fs.readFileSync('./www/js/home.js');
    }
    else if(urlObj.pathname == '/images/logo.png'){
        data = fs.readFileSync('./www/images/logo.png');
    }
    else if(urlObj.pathname == '/v2/movie/top250'){
        //创建转发请求
        let req = https.request({
            hostname: 'api.douban.com',
            port: 443,
            path: urlObj.path
        }, (res)=>{
            //接收到了豆瓣服务器的响应
            let value = '';
            res.on('data', (bf)=>{
                value += bf;
            })
            res.on('end', ()=>{
                //接收豆瓣服务器的数据完成
                //告诉客户端
                response.write(value);
                response.end();
            })
        });
        req.end();//转发出去
        return;
    }
    else{
        return;
    }
    

    //响应客户端
    response.write(data);
    response.end();
    // response.end('test');
    
})

server.on('listening', ()=>{
    console.log('服务器启动，你可以通过http://10.36.142.53:8080访问.');
})


//启动监听，服务器开始工作了
// server.listen(8080, 'localhost');
server.listen(8080, '10.36.142.53');


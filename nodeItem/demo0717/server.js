const http = require('http');
const fs = require('fs');
const url = require('url');

// 创建服务器
const server = http.createServer();

//接收请求
server.on('request',(request,response)=>{
    //request客户端的请求对象
    // response 服务器将要响应给客户端的响应对象

    //对请求进行分析处理
    let urlObj = url.parse(request.url);

    //分析请求
    let data = '';
    if (urlObj.pathname.startsWith('/static')) {
        let path = urlObj.pathname.replace(/\/static/,'.');
        // 获取到路径，这里的path是 1(./css/main.css) 
        // 2(./js/main.js)  3(./img/logo.png)
        data = fs.readFileSync(path);
    }else if (urlObj.pathname.startsWith('/v2')) {
        http.request({
            port:443,
            hostname:"api.douban.com",
            path:urlObj.pathname
        },(res)=>{
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
        }).end();//转发出去
        return;

    }else if(urlObj.pathname.startsWith('/')){
        data = fs.readFileSync('./main.html');
    }else if(urlObj.pathname.startsWith('/')){
        let path = './'+urlObj.pathname+'.html';
        //判断文件是否存在
        if(fs.existsSync(path)){
            data = fs.readFileSync(path);
        }
    }

    //响应客户端
    response.write(data);
    response.end();
});


server.on('listening', ()=>{
    console.log('启动成功，开始监听');
})


//启动监听，服务器开始工作了
server.listen(8888);

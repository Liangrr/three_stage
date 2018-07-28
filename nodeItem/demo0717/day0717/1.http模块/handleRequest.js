const https = require('https');
const fs = require('fs');
const url = require('url');


module.exports = function (request, response){
    //request客户端的请求对象
    // response 服务器将要响应给客户端的响应对象
    
    
    //对请求进行分析处理

    /*
    html
    ajax
    静态资源(js,css,images,fonts)
    */


    let urlObj = url.parse(request.url);
    console.log(urlObj.pathname);

    //分析请求
    let data = '';

    //处理静态资源
    if(urlObj.pathname.startsWith('/static')){
        let path = urlObj.pathname.replace(/\/static/, './www');
        data = fs.readFileSync(path);
    }
    //处理的豆瓣的请求
    else if(urlObj.pathname.startsWith('/v2')){
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
    //首页
    else if(urlObj.pathname == '/'){
        data = fs.readFileSync('./www/home.html');
    }
    //处理网页
    else if(urlObj.pathname.startsWith('/')){
        let path = './www'+urlObj.pathname+'.html';
        //判断文件是否存在
        if(fs.existsSync(path)){
            data = fs.readFileSync(path);
        }
        else{
            return;
        }
        
    }
    
    

    //响应客户端
    response.write(data);
    response.end();
    // response.end('test');
    
}
const http = require('https');
const fs = require('fs');
const url = require('url');


//请求的信息
let urlObj = {
    pathname: '/v2/movie/top250',
    query: {
        start: 1,
        count: 10
    }
}

// 创建请求
const request = http.request({
    port: 443,
    method: 'GET',
    hostname: 'api.douban.com',
    path: url.format(urlObj)//组装请求路径和请求参数
}, (response)=>{
    //接收请求成功的回调
    //response:后台响应该请求的响应对象
    //建立连接，并没有开始接收数据
    console.log('建立连接，得到响应');

    //开始接收数据
    let result = '';
    response.on('data', (buffer)=>{
        console.log('接收到了数据');
        result += buffer;
    })

    //接收完成,断开连接
    response.on('end', ()=>{
        console.log('接收完成,断开连接');
        fs.writeFileSync('./data.json', result);
    })
     
})

request.on('error', (error)=>{
    console.log('请求出错了');
    console.log(error);
})

//发送请求
request.end();

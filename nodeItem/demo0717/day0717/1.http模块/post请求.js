const http = require('https');
const fs = require('fs');
const querystring = require('querystring');


// 创建请求
const request = http.request({
    port: 443,
    method: 'POST',
    hostname: 'api.douban.com',
    path: '/v2/movie/top250'
}, (response)=>{
    //接收请求成功的回调
    //response:后台响应该请求的响应对象
    //建立连接，并没有开始接收数据
    console.log('建立连接，得到响应');

    //开始接收数据
    let flag = 1;
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

//监听错误信息
request.on('error', (error)=>{
    console.log('请求出错了');
    console.log(error);
})

//将需要通过post方式发送给后台的数据写入request中
let query = querystring.stringify({start: 0, count: 5});
request.write(query);

//发送请求
request.end();

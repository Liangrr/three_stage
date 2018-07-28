const https = require('https');
const fs = require('fs');
const url = require('url');

let urlObj = {
    pathname: '/v2/movie/top250',
    query: {
        start: 1,
        count: 10
    }
}
const request = https.request({
    hostname:'api.douban.com',
    port:443,
    methond:'GET',
    path:url.format(urlObj)
},(response)=>{
    console.log('建立连接，得到响应');
    let result = '';
    response.on('data',(bf)=>{
        result += bf;
        console.log('接收到了数据');
    })
    response.on('end',()=>{
        console.log('接收完成,断开连接');
        fs.writeFileSync('./data.json',result);
    })
    
});

request.on('error',(error)=>{
    console.log('请求出错！');
    console.log(error)
})

request.end();
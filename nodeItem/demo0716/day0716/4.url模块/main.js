var url = require('url');

var path = 'http://www.qianfeng.com:90/index/course?name=html5&class=1803#3'
// 解析url路径
var result = url.parse(path, true);
console.log(result);
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.qianfeng.com:90',
  port: '90',
  hostname: 'www.qianfeng.com',
  hash: '#3',
  search: '?name=html5&class=1803',
  query: 'name=html5&class=1803',//query: { name: 'html5', class: '1803' },
  pathname: '/index/course',
  path: '/index/course?name=html5&class=1803',
  href: 'http://www.qianfeng.com:90/index/course?name=html5&class=1803#3' }
*/

//封装url字符串
var pathObj = {
    protocol: 'https:',
    hostname: 'www.baidu.com',
    port: 443,//http默认端口号80，https默认端口号443
    pathname: '/index',
    query: {
        keyword: 'html5培训'
    },
    hash: '#main'
}
var result = url.format(pathObj);

console.log(result);


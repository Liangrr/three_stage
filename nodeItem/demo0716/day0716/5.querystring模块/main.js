//对url中的参数进行操作
var qs = require('querystring');

// 对参数进行解析
var query = 'name=html5&class=1803';
var result = qs.parse(query);
console.log(result);


// 封装参数
var queryObj = {
    course: ['html5', 'UI', 'java', 'python'],
    price: 18800
}
var result = qs.stringify(queryObj);
console.log(result);
//   course=html5&course=UI&course=java&course=python&price=18800
//   course[]=html5&course[]=UI&course[]=java&course[]=python&price=18800



//编码
var result = qs.escape('深圳');
console.log(result);

// 解码
var result = qs.unescape('file:///D:/%E4%B8%89%E9%98%B6%E6%AE%B5/sz1803/day0716/1.%E6%A8%A1%E5%9D%97%E5%8C%96%E5%BC%80%E5%8F%91/www/index.html');
console.log(result);
const express = require('express');
const swig =  require('swig');
const fs = require('fs');

// 创建服务器
const server = express();


// 处理请求的方式
// server.get()
// server.post()


// 配置静态资源响应的方法
// 第一个参数的值是url路径的前缀也是路径中的一段值。
// 当请求的url跟参数1配置时，被express.static方法处理。静态读取资源的方式处理
server.use('/static', express.static('./www'));
/*
请求：/static/css/home.css
↓   use()处理
/css/home.css
↓  express.static('./www')处理
./www/css/home.css
*/




//处理html页面请求
// 配置模板引擎
//1.配置模板存放的目录
// 参数1：关键字，配置模板存放的目录
// 参数2：目录
server.set('views', './htmlDir');
// 2.声明将要使用的模板引擎
// 参数1：固定字段，关键字
// 参数：引擎名字，也跟文件的后缀一致
server.set('view engine', 'html');
// 3.配置模板引擎
// 参数1:使用的引擎名字，固定字段，关键字
// 参数2：引擎
server.engine('html', swig.renderFile);
// 关闭缓存
swig.setDefaults({cache: false});

// 渲染首页
server.get('/', (request, response)=>{
    //查询数据库，页面所用到的数据
    // 参数1：模板文件路径
    // 参数2：模板使用的属性
    response.render('index', {
        // username: '张三'
        goodslist: [
            {title: '上衣', price: '299'},
            {title: '鞋子', price: '499'},
            {title: '袜子', price: '9.9'}
        ]
    });
    // swig.renderFile => ./www/home.html
})

/*
前后台不分离：
页面的数据由后台取得，渲染在模板上，再响应客户端
pc端    


前后台分离：
页面的数据由前端发送ajax请求跟后台，取得数据后，操作dom，显示在页面
后台管理系统
移动端

*/


// server.get('/home', (request, response)=>{
//     let result = fs.readFileSync('./www/home.html');
//     response.end(result);
// })

// server.use('/', express.static('./www'));


// server.get('/list', (request, response)=>{
//     let result = fs.readFileSync('./www/list.html');
//     response.end(result);
// })



// 开启服务器
server.listen(8080, 'localhost', (error)=>{
    if(error){
        console.log('服务器出错');
    }else{
        console.log('服务器启动成功,请访问:http://localhost:8080');
    }
})



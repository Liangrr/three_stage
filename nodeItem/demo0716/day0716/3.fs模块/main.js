var fs = require('fs');


//读文件
// 异步读文件，不会阻塞主线程
fs.readFile('./app.js', (error, result)=>{
    //error有值，说明读文件出错
    // console.log(result.toString());
    // console.log(result+'');
    // console.log('异步：'+result);
});


// 同步读文件，会阻塞主线程
var result = fs.readFileSync('./app.js');
//读文件出错，直接报错。
// console.log('同步:'+result);



// 写文件
fs.writeFileSync('./test.txt', '千锋教育');

//追加写文件
fs.appendFileSync('./test.txt', ',用良心做教育!');

// 删除文件
fs.unlinkSync('./test.txt');

//重命名
// fs.renameSync('./app.js', './test.js');


// 创建文件夹
// fs.mkdirSync('./dist');


//删除文件夹
// fs.rmdirSync('./dist');

// 读文件夹
var result = fs.readdirSync('D:/三阶段/sz1803/day0716/1.模块化开发');
console.log(result);
//作业：封装一个函数，参数接收任意的一个路径，return读出文件夹内所有的文件和文件夹
 /*
 {
     web: {
         a.js: true,
         b.js: true,
         c.js: true,
         main.js: true
     }
     www: {
         a.js: true,
         b.js: true,
         c.js: true,
         index.html: true,
        css: {

        }
     }
 }
 
 递归
 */




//读取文件或文件夹信息
var result = fs.statSync('./app.js');
console.log(result);//文件mode:33206


var result = fs.statSync('D:/三阶段/sz1803/day0716/1.模块化开发');
console.log(result);//文件夹mode:16822


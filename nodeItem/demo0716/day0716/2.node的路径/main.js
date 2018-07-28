

var aModule2 = require('./a.js');//相对路径
console.log(aModule2);

var aModule1 = require('a.js');//专门从node_modules文件夹中查找模块
console.log(aModule1);


var fsModule = require('fs');//找node内置模块
// console.log(fsModule);
fsModule.writeFile('./text', '千锋教育', function(error){
    console.log('写文件完成');
    console.log(error);
});

var aModule3 = require('/a.js');//查找根目录。当前main.js所在的系统的根目录。
console.log(aModule3);


var gulp = require('./gulp');//如果只有文件夹路径，默认引入该文件夹下面的index.js
console.log(gulp);



// node中的特殊路径
// 常量：
// console.log(__dirname);//当前文件所处在系统中的文件夹路径
// console.log(__filename);//当前文件所处在系统中的文件路径
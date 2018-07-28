console.log('b开始执行');


// 引入a.js,  b文件对a有依赖
var aModule = require('./a');

// console.log(aModule);

var personInfo = {
    name: aModule.name,
    age: aModule.age
}

module.exports = personInfo;

console.log('b执行完成');

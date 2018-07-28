console.log('c开始执行');

//c文件对b文件有依赖
var cModule = require('./b');

console.log(cModule.name);
console.log(cModule.age);

console.log('c执行完成');
console.log('a开始执行');


var name = '张三';
var age = 10;


// 将需要提供给外部使用的值，放在外部的输出中
console.log(module.exports);

// module.exports.name = name;
module.exports = {
    name: name,
    age: age
};


console.log('a执行完成');

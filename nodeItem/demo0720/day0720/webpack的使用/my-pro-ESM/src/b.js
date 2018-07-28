//一个模块中，可以有多个export输出，只能有一个export default

//这种写法不支持
/*
let num = 123;
export  num;
*/

// 正确的写法：
export let num = 123;

export let obj = {
    message: 'hello esm'
};

export default 'test'


console.log('12345');
console.log(obj);

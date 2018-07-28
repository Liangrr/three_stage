// import 'babel-polyfill'

let personM = require('./person');
console.log(personM);

let name = 'hello world';

let func = (a, b)=>{
    return a+b;
}



var arr = [1,2,3];
var arr2 = Array.from(arr);

new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('hello');
    }, 1000);
});

function func2(a, b, ...rest){
    console.log(rest);
}

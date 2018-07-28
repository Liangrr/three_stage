// es6 模块化开发   ESM, webpack可以直接编译。

// commonJS引入模块方式
// var aModule = require('./a');

//es6引入模块方式：
// 引入的是默认输出的内容
import aModule from './a';

// 引入的是默认输出的内容
import bModule from './b'
// 引入指定名字输出的内容
import {num, obj as object} from './b'

// 引入所有内容
import * as bAllModule from './b'


console.log(bModule);

console.log(num);
console.log(object);

console.log(bAllModule);








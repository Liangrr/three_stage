//require第一次引入文件，文件中的代码会执行一次。而之后的引入都使用第一次运行的结果。

console.log('main开始执行');

// require('./a.js');
// require('./b.js');
require('./c.js');


console.log('main执行完成');

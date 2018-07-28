
// commonJS输出方式
/*
module.exports = {
    num: 123,
    bool: true,
    obj: {
        message: 'hello esm'
    },
    arr: ['item1', 'item2', 'item3'],
    func: function(){
        alert(1);
    }
}
*/


// es6输出方式

//默认输出内容，方式1
/*
export default {
    num: 123,
    bool: true,
    obj: {
        message: 'hello esm'
    },
    arr: ['item1', 'item2', 'item3'],
    func: function(){
        alert(1);
    }
}
*/


//默认输出内容，方式2：
let num = 123;
let bool = true;
let obj = {
    message: 'hello esm'
};
let arr = ['item1', 'item2', 'item3'];
let func = function(){
    alert(1);
};

let moduleObj = {
    num,
    bool,
    obj,
    arr,
    func
};
// export default moduleObj;

export default {
    num,
    bool,
    obj,
    arr,
    func
};



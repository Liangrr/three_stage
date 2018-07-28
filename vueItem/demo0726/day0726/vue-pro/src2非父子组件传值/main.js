import Vue from 'vue'
import App from './App.vue'

import center from './center'

// Vue.prototype.$center = new Vue();
Vue.prototype.$center = center;

const vm = new Vue({
    el: '#app',
    render: h=>h(App)
})



// console.log(vm);

/*

// 自定义事件监听
// 监听在前，触发在后
//监听事件：
vm.$on('hello', (result)=>{
    console.log('hello事件执行了1')
})
vm.$on('hello', ()=>{
    console.log('hello事件执行了2')
})

vm.$on('test', (result)=>{
    console.log('test事件执行了1')
})

let callback = ()=>{
    console.log('test事件执行了2')
};
vm.$on('test', callback);

//移除监听
// vm.$off();//移除所有事件的所有监听
// vm.$off('test');//移除test事件的所有监听
// vm.$off('test', callback);//移除test事件的一个指定的事件

var obj1 = {name: 'zhangsan'}
var obj2 = {name: 'zhangsan'}


// 触发事件
vm.$emit('hello');
vm.$emit('test');

*/

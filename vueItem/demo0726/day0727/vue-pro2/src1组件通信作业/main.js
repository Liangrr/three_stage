import Vue from 'vue'
import App from './App.vue'
import center from './center.js'

// Vue.prototype.$center = new Vue();
Vue.prototype.$center = center;

Vue.filter('arrFilter', (value)=>{
    if(!value){
        return;
    }
    var str = '';
    value.map((item,index)=>{
        if(index == (value.length-1)){
            str += item;
        }else{
            str += item  +'、 ';
        }
    })
    //过滤器的输出值
    return str;
})

const vm = new Vue({
    el: '#app',
    render: h=>h(App)
})




/*
import center from './center.js'


// 先监听，后触发
center.$on('test', (...rest)=>{
    console.log('test监听到了1');
    console.log(rest);
})
center.$on('test', (...rest)=>{
    console.log('test监听到了2');
    console.log(rest);
})

let cb = (...rest)=>{
    console.log('hello监听到了1');
    console.log(rest);
};
center.$on('hello', cb);

center.$on('hello', (...rest)=>{
    console.log('hello监听到了2');
    console.log(rest);
})

center.$off('hello', cb);

// 触发
center.$emit('test', 'hello vue');
center.$emit('hello', 'hello vue');
center.$emit('world', 'hello vue');

*/
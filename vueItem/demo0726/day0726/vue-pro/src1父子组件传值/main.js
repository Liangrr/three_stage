import Vue from 'vue'
import App from './App.vue'//项目的根组件

const vm = new Vue({
    el: '#app',
    // render: function(handle){
    //     return handle(App)//读取app组件的内容
    // }
    render: h=>h(App)
});


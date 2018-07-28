import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$center = new Vue();

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
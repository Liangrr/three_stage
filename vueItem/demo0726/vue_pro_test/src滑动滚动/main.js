import Vue from 'vue'
import App from './App.vue'

import HelloUI from './components/HelloUI.js'
//使用插件
Vue.use(HelloUI);


const vm = new Vue({
    el: '#app',
    render: h=>h(App)
})

// vm.message

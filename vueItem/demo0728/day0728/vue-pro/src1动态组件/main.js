import Vue from 'vue'
import App from './App.vue'

// Vue.component(App.name, App);

new Vue({
  el: '#app',
  // components: {
  //   [App.name]: App
  // },
  render: h => h(App)
})

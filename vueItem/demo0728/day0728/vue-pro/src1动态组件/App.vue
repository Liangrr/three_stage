<template>
  <div id="app">

    <button @click="btnAction(1)">one</button>
    <button @click="btnAction(2)">two</button>


    <!-- <one-com v-if="flag==1"></one-com>
    <two-com v-if="flag==2"></two-com> -->
    
    <!-- 动态组件 -->
    <component :is="comName"></component>

  </div>
</template>

<script>
import One from './components/One.vue'
import Two from './components/Two.vue'
export default {
  // name: 'app',
  components: {
    [One.name]: One,
    [Two.name]: Two
  },
  data () {
    return {
      flag: 1
    }
  },
  computed: {
    comName(){
      if(this.flag == 1){
        return 'one-com';
      }else{
        return 'two-com';
      }
    }
  },
  methods: {
    btnAction(flag){
      this.flag = flag;
    }
  }
}
</script>

<style lang="scss">

</style>

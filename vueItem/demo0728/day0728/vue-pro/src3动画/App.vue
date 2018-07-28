<template>
  <div id="app">

    <button @click="btnAction(1)">one</button>
    <button @click="btnAction(2)">two</button>


    <!-- <one-com v-show="flag==1"></one-com>
    <two-com v-show="flag==2"></two-com> -->


<!-- <keep-alive>
    <one-com v-if="flag==1"></one-com>
    <two-com v-if="flag==2"></two-com>
</keep-alive> -->
    
    <!-- 动态组件 -->
    <!-- <keep-alive>
      <component :is="comName"></component>
    </keep-alive> -->


    <input type="checkbox" v-model="isSelect"/>

    <!-- 
      transition组件：添加动画的，通过class添加动画，该组件只提供class
      enter进入:
        fade-enter
        fade-enter-to
        fade-enter-active
      leave离开：
        fade-leave
        fade-leave-to
        fade-leave-active
     -->
     <!-- 给一个元素添加动画 -->
    <transition name="fade">
      <div class="box" v-show="isSelect"></div>
    </transition>

    <!-- 给多个元素添加动画 -->
    <transition-group name="fade">
      <div key="1" class="box" v-show="isSelect"></div>
      <one-com key="2" v-if="isSelect"></one-com>
    </transition-group>
    
    
    <!-- keep-alive和transition一起使用 -->
    <transition name="fade">
      <keep-alive>
        <one-com v-if="isSelect"></one-com>
      </keep-alive>
    </transition>


    <!-- 修改进入和离开的class名字 -->
    <transition enter-class="" enter-to-class="" enter-active-class="bounceIn"
                leave-class="" leave-to-class="" leave-active-class="hinge">
      <div class="box" v-show="isSelect"></div>
    </transition>
    
    
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
      isSelect: true,
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
  },

  errorCaptured(error){
      console.log('app errorCaptured');
      // console.log(error);
      return false;
      // return true;
  }
}
</script>

<style lang="scss">
.box{
  width: 100px;
  height: 100px;
  background: red;
}

.tada, .bounceIn, .hinge{
  animation-duration: 2s;
}
/*
.fade-enter{
  opacity: 0;
}
.fade-enter-to{
  // opacity: 1;
}
.fade-enter-active{
  transition: 2s opacity;
}

.fade-leave{
  // opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: 2s opacity;
}
*/


@keyframes fadeIn {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
.fade-enter-active{
  animation: fadeIn 2s; 
}
@keyframes fadeOut {
  0%{opacity: 1;}
  100%{opacity: 0;}
}
.fade-leave-active{
  animation: fadeOut 2s; 
}





</style>

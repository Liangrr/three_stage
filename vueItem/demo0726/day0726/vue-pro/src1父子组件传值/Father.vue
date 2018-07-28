<template>
<div class="father">
    <h1>father组件</h1> 
    <p>{{message}}</p> 
    <input type="text" ref="in">
    <button @click="sendAction()">发送子组件</button>
    <p>接收到的值为：</p>
    <hr/>

    <Son :value="123456" title="hello" :inputVal="val" 
         @sendData="testAction">
    </Son>

    <button @click="testAction()">按钮</button>

</div> 
</template>

<script>
import Son from './Son.vue'
export default {
    components: {
        Son
    },
    data(){
        return {
            message: 'hello vue',
            val: ''
        }
    },
    methods: {
        sendAction(){
            this.val = this.$refs.in.value;
        },
        testAction(...rest){
            console.log('test执行');
            console.log('接收：');
            console.log(rest);
        }
    }
}
</script>



<template>
<div class="one">
    <h1>one组件</h1>

    <input type="text" v-model="value"/>
    <button @click="sendAction()">发送</button>
</div>
</template>

<script>
export default{
    data(){
        return {
            value: ''
        }
    },
    methods: {
        //发送事件
        sendAction(){
            console.log(this.value);
           
            //触发事件
            this.$center.$emit('send-data', this.value);
        }
    },
    created(){
        // console.log(this.$center);
    }
}
    
</script>

<style scoped>

</style>

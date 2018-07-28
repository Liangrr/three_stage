<template>
<div class="two">
    <h1>two组件</h1>
    <p>接收到的数据为：{{msg}}</p>
</div> 
</template>

<script>
export default{
    data(){
        return {
            msg: ''
        }
    },
    methods: {
        listener(result){
            console.log('监听到了:');
            console.log(result);
            this.msg = result;
        }
    },
    created() {
        // console.log(this.$center);
        console.log('组件创建了');
        // 监听事件
        this.$center.$on('send-data', this.listener);
    },
    beforeDestroy(){
        console.log('组件销毁前');
        //移除监听
        this.$center.$off('send-data', this.listener);
    }
}
</script>

<style scoped>

</style>

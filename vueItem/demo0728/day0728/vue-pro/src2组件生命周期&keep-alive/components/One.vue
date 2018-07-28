<template>
<div id="one">
    <h1>one组件</h1>

    <input type="text" />
</div>
</template>

<script>
export default {
    name: 'one-com',
    beforeCreate() {
        console.log('one beforeCreate');
    },
    created() {
        console.log('one created');
    },
    beforeMount() {
        console.log('one beforeMount');
    },
    mounted() {
        console.log('one mounted');
        'fds'.map(item=>item);
    },
    //activated，deactivated组件在使用了keep-alive包裹后才会执行的生命周期方法
    activated(){
        console.log('one activated');
    },
    deactivated(){
        console.log('one deactivated');
    },
    beforeDestroy() {
        console.log('one beforeDestroy');
    },
    destroyed() {
        console.log('one destroyed');
    },
    //捕获异常方法，只能捕获子组件异常
    errorCaptured(){
        console.log('one errorCaptured');
    }

}
</script>

<style>

</style>

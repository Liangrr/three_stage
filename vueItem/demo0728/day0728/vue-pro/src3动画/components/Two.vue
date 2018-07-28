<template>
<div id="two">
    <h1>two组件</h1>
</div>
</template>

<script>
export default {
    name: 'two-com',
    beforeCreate() {
        console.log('two beforeCreate');
    },
    created() {
        console.log('two created');
    },
    beforeMount() {
        console.log('two beforeMount');
    },
    mounted() {
        console.log('two mounted');
    },
    activated(){
        console.log('two activated');
        this.timer = new Date().getTime();
    },
    deactivated(){
        console.log('two deactivated');
        var result = new Date().getTime() - this.timer;
    },
    beforeDestroy() {
        console.log('two beforeDestroy');
    },
    destroyed() {
        console.log('two destroyed');
    }
}
</script>

<style>

</style>

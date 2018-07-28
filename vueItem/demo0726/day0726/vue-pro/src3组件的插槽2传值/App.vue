<template>
<div id="app">

    <Wrap>

        <h1 slot="title">首页</h1>
        <h1 slot="title">首页</h1>

        <Box :data="message"/>

        <!-- wrap和box组件是非父子组件，兄弟组件 -->

    </Wrap>
    
</div>
</template>

<script>
import Wrap from './components/Wrap.vue'
import Box from './components/Box.vue'
export default {
    components: {
        Wrap,
        Box
    },
    data(){
        return {
            message: 'hello'
        }
    }
}
    
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
html, body, #app{
    width: 100%;
    height: 100%;
}
h1{
    font-size: 12px;
}
</style>

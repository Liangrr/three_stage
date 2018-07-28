<template>
<div id="app">

    <Wrap>

        <h1 slot="title">首页</h1>

        <p>erseafdasdfasdad</p>
        <p>erseafdasdfasdad</p>
        
        <mark slot="title">test</mark>

        <p>erseafdasdfasdad</p>
        <p>erseafdasdfasdad</p>

        <Box/>

        dfasdfasdfasdfas

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
</style>

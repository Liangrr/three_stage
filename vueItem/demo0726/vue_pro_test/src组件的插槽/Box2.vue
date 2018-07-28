<template>
<div class="box">
    {{data}}<br/>
    {{message}}
</div>
</template>

<script>
export default {
    props: ['data'],
    data(){
        return {
            message: '这是box组件'
        }
    },
    mounted() {
        console.log(this.$parent);
    },
}
</script>


<style scoped>
.box{
    width: 300px;
    height: 100px;
    background: pink;
    color: #fff;
    font-size: 30px;
}
</style>

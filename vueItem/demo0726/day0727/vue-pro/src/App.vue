<template>
<div id="app">
    <h1>APP</h1>

    <Add v-show="showFlag==0"/>
    <Show v-show="showFlag==1" @finish="handler"/>
    <Modify v-show="showFlag==2" @cancel="handler"/>

    <List/>


</div>
</template>

<script>
import Add from './components/Add.vue'
import Show from './components/Show.vue'
import Modify from './components/Modify.vue'
import List from './components/List.vue'
export default {
    components: {
        Add,
        Show,
        Modify,
        List
    },
    data(){
        return {
            showFlag: 0//0:新增，1：查看，2：修改
        }
    },
    methods: {
        //显示回新增的事件
        handler(){
            this.showFlag = 0;
        }
    },
    created() {
        console.log('app监听查看');
        this.$center.$on('show-data', ()=>{
            console.log('app监听到了查看事件');
            // 显示查看组件
            this.showFlag = 1;
        });
        this.$center.$on('modify-data', ()=>{
            // 显示修改组件
            this.showFlag = 2;
        });
    },
}
</script>

<style>

</style>

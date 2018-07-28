<template>
<div id="app">
    <h1>APP</h1>

    <Add v-show="showFlag==0"/>
    <Show v-show="showFlag==1" @finish='handler'/>
    <Modify v-show="showFlag==2" @cancel="handler"/>

    <List/>


</div>
</template>

<script>
import Add from './Add.vue'
import Show from './Show.vue'
import Modify from './Modify.vue'
import List from './List.vue'
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
        handler(){
            this.showFlag = 0;
        }
    },
    created() {
        this.$center.$on('show-data',()=>{
        	this.showFlag = 1;
        }),
        this.$center.$on('modify-data',()=>{
        	this.showFlag = 2;
        })
    },
}
</script>

<style>

</style>

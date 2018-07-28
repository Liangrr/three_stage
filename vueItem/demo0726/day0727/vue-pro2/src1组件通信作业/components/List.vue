<template>
<div id="list">
    <h1>列表</h1>
    <ul>
        <li v-for="(personInfo, index) in dataSource" :key="index">
            {{personInfo.name}}
            <button @click.stop="deleteAction(index)">删除</button>
            <button @click.stop="showAction(index)">查看</button>
            <button @click.stop="modifyAction(index)">修改</button>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data(){
        return {
            dataSource: [],
            modifyIndex: -1
        }
    },
    methods: {
        deleteAction(index){
            console.log('删除点击事件');
            //根据下标删除数据源中的数据
            this.dataSource.splice(index, 1);
        },
        showAction(index){
            console.log('查看点击事件');
            // 取出查看的值
            let info = this.dataSource[index];
            console.log('触发');
            this.$center.$emit('show-data', Object.assign({}, info));
        },

        modifyAction(index){
            console.log('修改点击事件');
            // 取出修改的值
            let info = this.dataSource[index];
            // 记录修改的下标
            this.modifyIndex = index;
            // 触发修改事件
            this.$center.$emit('modify-data', Object.assign({}, info));
        }
    },
    created() {

        this.$center.$on('add-data', (personInfo)=>{
            console.log('监听到了新增事件');
            // console.log(personInfo);
            this.dataSource.push(personInfo);
        })

        //监听修改事件
        this.$center.$on('finish-modify', (info)=>{
            //替换
            this.dataSource.splice(this.modifyIndex, 1, info);
            this.modifyIndex = -1;
        });
    },
}
</script>

<style>

</style>

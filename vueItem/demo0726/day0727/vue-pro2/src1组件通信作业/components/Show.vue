<template>
<div id="show">
    <h1>查看</h1>
    <p>姓名：{{showInfo.name}}</p>
    <p>性别：{{showInfo.sex}}</p>
    <p>培训方向：{{showInfo.course | arrFilter}}</p>
    <p>毕业时间：{{showInfo.year}}</p>
    <p>备注：{{showInfo.des}}</p>
    <p>
        <button @click="finishShowAction()">完成查看</button>
    </p>
</div>
</template>

<script>
export default {
    data(){
        return {
            showInfo: {}
        }
    },
    methods: {
        finishShowAction(){
            //完成查看，App组件显示回新增
            this.$emit('finish');
            
        }
    },
    created() {
        console.log('show监听查看');   
        this.$center.$on('show-data', (info)=>{
            console.log('监听到了查看事件');
            this.showInfo = info;
        });
    }
}
</script>

<style>

</style>

<template>
<nav class="tabs">
    <slot/>
</nav>
</template>

<script>
export default {
    methods: {
        handleSelectTabById(id){
            this.tabItemArr.map(tabitem=>{
                //判断这个tabitem组件对象是否是点击的组件对象
                if(tabitem.id == id){
                    tabitem.isSelect = true;
                }else{
                    tabitem.isSelect = false;
                }
                // 是，设置isSelect=true
                // 不是，设置isSelect=false
            })
        }
    },
    mounted(){
        //取得所有的tabitem的slot
        let slots = this.$slots.default.filter(slotItem=>slotItem.tag);
        //取得所有的tabitem的组件对象
        let instances = slots.map(slotItem=>slotItem.componentInstance);
        //第一个tabitem为选中状态
        instances[0].isSelect = true;
        
        this.tabItemArr = instances;
    }
}
</script>

<style scoped>
.tabs{
    width: 100%;
    height: 49px;
    background: lavender;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
}
</style>

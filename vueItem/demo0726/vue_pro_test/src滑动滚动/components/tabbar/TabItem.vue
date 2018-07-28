<template>
<li class="tab" :class="{active: isSelect}" @click="tabAction()">
    <div class="icon">
        <slot name="icon"/>
    </div>
    <div class="text">
        <slot/>
    </div> 
</li>
</template>

<script>
export default {
    props: {
        id: String
    },
    data(){
        return {
            isSelect: false
        }
    },
    methods: {
        tabAction(){
            console.log('点击了', this.id, true);
            //发消息给tabbar,将需要选中的id告诉了tabbar
            console.log(this.$parent);
            this.$parent.handleSelectTabById(this.id);
        }
    }
}
</script>

<style scoped>
.tab{
    list-style: none;
    flex: 1;
}
.tab.active{
    background: lightblue;
}
.tab .icon{
    padding-top: 5px;
}
.tab .icon img{
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
}
.tab .text{
    font-size: 12px;
    color: #999;
    text-align: center;
}

</style>

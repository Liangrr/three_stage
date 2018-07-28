<template>
<div class="wrap">
    <header class="header">
        <slot name="title"/>
    </header>
    <div class="content">
        
        <input type="text" v-model="value">
        <button @click="sendAction()">发送</button>
        
        
        <slot/>


    </div>
</div>
</template>

<script>
export default{
    data(){
        return {
            value: ''
        }
    },
    methods: {
        sendAction(){
            console.log(this.value);

            console.log(this.$slots);
            //过滤出来有用的box
            let defaultSlots = this.$slots.default.filter(slotItem=>{
                return slotItem.tag;
            })
            console.log(defaultSlots);

            //取得box
            let boxSolt = defaultSlots[0];

            console.log(boxSolt);
            //取得box对应的组件
            let instance = boxSolt.componentInstance;
            console.log(instance);
            //赋值
            instance.message = this.value;
        }
    }
}
    
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 44px;
    background: lavenderblush;
    position: absolute;
    top: 0;
    left: 0;
}
.content{
    width: 100%;
    height: 100%;
    padding-top: 44px;
    box-sizing: border-box;
    background: palegoldenrod;
}

</style>

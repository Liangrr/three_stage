<template>
<div class="son">
    <h1>son组件</h1> 

    <p>接收到了数据inputVal：{{inputVal}}</p>
    <p>接收到了数据title：{{name}}</p>
    <button @click="modify()">修改</button>

    <input type="text" ref="in">
    <button @click="sendAction()">发送给父组件</button>

</div> 
</template>

<script>
export default {
    //接收组件标签上的属性
    //外部属性,只能访问，不能修改
    // 单向数据流：保证数据是自顶向下的
    // props: ['value', 'title']
    props: {
        value: Number,
        title: String,
        inputVal: String
    },
    //内部属性
    data(){
        return {
            name: this.title
        }
    },
    methods: {
        modify(){
            this.name = 'world';
        },
        sendAction(){
            let value = this.$refs.in.value;

            //调用click事件
            // 触发组件标签上的自定义事件
            // 参数1：事件名字
            // 参数2：传递的值sendData
            this.$emit('sendData', value, 1,2,3,4,5);
        }
    }

}
</script>




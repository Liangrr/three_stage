<template>
	<div class="father">
		<h2>这是Father.vue</h2>
		<!--父组件发送消息-->
		<p>Fat发送:{{sendMsg}}</p>
		<input type="text" ref="in"/>
		<button @click="sendAction">发送</button><br />
		<!--收到子组件的消息-->
		<p>Fat收到:{{getMsg}}</p>
		<Son :info="sendMsg"  @sendData='getSon'></Son>
	</div>
</template>

<script>
	import Son from './Son.vue'
	export default {
	    data(){
	    	return {
//	    		发送消息和收到消息
	    		sendMsg:'hello',
	    		getMsg:''
	    	}
	    },
	    components: {
//	    	定义一个子组件
	        Son
	    },
	    methods:{
	    	sendAction(){
//	    		输入框的值给发送
	    		this.sendMsg = this.$refs.in.value
	    	},
	    	getSon(val){
//	    		获取子组件传的值
	    		this.getMsg = val;
	    	}
	    }
	}
</script>




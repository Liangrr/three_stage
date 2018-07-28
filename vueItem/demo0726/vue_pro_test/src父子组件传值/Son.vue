<template>
	<div class="son">
		<hr />
		<h2>这是Son.vue</h2>
		<!--收到父组件的传值-->
		<p>Son收到:{{info}}</p>
		<!--获取并且发送子组件的值-->
		<input type="text" ref='sonin'/>
		<button @click="sendAction">发送</button><br />
		<p>Son发送:{{sendMsg}}</p>
	</div>
</template>

<script>
	export default {
//		博文属性来装父组件的值
		props:{
			info:String,
		},
		data(){
			return {
				sendMsg:''
			}
		},
		methods:{
			sendAction(){
				this.sendMsg = this.$refs.sonin.value;
//				自定义组件来把子组件的值传给父组件
				this.$emit('sendData',this.sendMsg);
			}
		}
	}
</script>

<style>
</style>
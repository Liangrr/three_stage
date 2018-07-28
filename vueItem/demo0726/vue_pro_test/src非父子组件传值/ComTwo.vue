<template>
	<div>
		
		<h3>TWO</h3>
		<p>收到的数据为:{{msg}}</p>
		<!--<input type="text" />
		<button></button>-->
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:''
			}
		},
		methods:{
			listener(res){
				console.log(res);
				this.msg = res;
			}
		},
		created(){
			console.log('创建')
			this.$center.$on('send-data',this.listener);
		},
		beforeDestroy(){
			console.log('销毁')
			this.$center.$off('send-data',this.listener);
		}
	}

</script>
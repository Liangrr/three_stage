<template>
	<div>
		<h3>ONE</h3>
		<input type="text" v-model="value" />
		<button @click="oneActive()">一号传</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				value:''
			}
		},
		methods:{
			oneActive(){
//				把获取的值存到this.$center里
				this.$center.$emit('send-data',this.value);
//				console.log(this.$center)
//				console.log(this.value)
			}
		}
	}
	
</script>
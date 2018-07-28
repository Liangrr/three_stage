<template>
	<div class="show" >
	    <h3>查看</h3>
	    <p>姓名：{{showInfo.name}}</p>
	    <p>性别：{{showInfo.sex}}</p>
	    <p>毕业时间：{{showInfo.year}}</p>
	    <p>兴趣：{{showInfo.hobby | arrFilter}}</p>
	    <p>备注：{{showInfo.des}}</p>
	    <p>
	        <button @click="finishShowAction()">完成查看</button>
	    </p>
	</div>
</template>

<script >
	export default {
		data(){
			return {
				showInfo:{},
			}
		},
		methods:{
			finishShowAction(){
//				父子组件
				this.$emit('finish');
			}
		},
		created(){
			this.$center.$on('show-data',(showVal)=>{
				this.showInfo = showVal;
			})
		}
	}
</script>
<template>
	<div id="app">
		<!--<Wrap1>
		<h1 slot="title">首页</h1>
			<Box></Box>
			
		<mark slot="title">test</mark>
		</Wrap1>-->
		
		<br /><hr /><br />
		
		<Wrap2>
			<Box2 :data="message"/>
		</Wrap2>
		
	</div>
</template>

<script>
	import Wrap1 from './Wrap.vue';
	import Box from './Box.vue';
	import Wrap2 from './Wrap2.vue';
	import Box2 from './Box2.vue';
	
	export default {
		components:{
			Wrap1,
			Box,
			Wrap2,
			Box2
		},
		data(){
	        return {
	            message: 'hell'
	        }
	    }
	}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
html, body, #app{
    width: 100%;
    height: 100%;
}
</style>
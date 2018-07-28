<template>
	<div id="app">
		<h1>父子组件传值</h1>
		<fat></fat>
	</div>
</template>

<script>
	import fat1 from './Father.vue';
	
	export default {
		components: {
        	fat:fat1
    	}
	}
</script>

<style scoped>
h1{
    background: red;
    color: yellow;
}  
</style>
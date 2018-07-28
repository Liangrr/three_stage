<template>
<div class="swiper-container" ref="swiper">
	<div class="swiper-wrapper">
        <slot/>
    </div>
</div>
</template>

<script>
export default {
	props:{
		loop:Boolean,
		autoplay:Boolean,
		timer:Number,
	},
	mounted(){
		let timer = 0;
        if(this.autoplay){
            timer = this.timer || 3000;
        }
		new Swiper(this.$refs.swiper,{
			loop:this.loop,
			autoplay:this.autoplay,
			autoplay:timer
		})
	}
	
}
</script>

<style>
</style>
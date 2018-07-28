<template>
<div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <slot/>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
export default {
    props: {
        loop: Boolean,
        autoplay: Boolean,
        timer: Number
    },
    mounted(){
        let timer = 0;
        if(this.autoplay){
            timer = this.timer || 3000;
        }
        new Swiper(this.$refs.swiper, {
            loop: this.loop,
            autoplay: timer
        });
    }
}
</script>

<style>

</style>

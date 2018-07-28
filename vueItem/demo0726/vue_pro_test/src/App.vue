<template>
	<div id="app">
	<swiper :loop="true" :autoplay="true" :timer="1000">
        <swiper-item>
            <img src="https://pic.maizuo.com/usr/movie/58e02d95d0b00981a398dc1c5e89a269.jpg"/>
        </swiper-item>
        <swiper-item>
            <img src="https://pic.maizuo.com/usr/movie/e68b3227b59813f4041838a97f042f4a.jpg"/>
        </swiper-item>
        <swiper-item>
            <img src="https://pic.maizuo.com/usr/movie/9b4fbab1d7981b338b9f762252fa8bab.jpg"/>
        </swiper-item>
    </swiper>
	</div>
</template>

<script>
import Swiper from './swiper/Swiper.vue';
import SwiperItem from './swiper/SwiperItem.vue';
export default {
	components:{
		Swiper,
		SwiperItem,
	}
}
</script>

<style>
img{
    width: 100%;
}
</style>
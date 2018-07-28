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

    <hr/>
    
    <tab-bar>
        <tab-item id="外卖">
            <img slot="icon" src="http://placehold.it/100x100">
            外卖
        </tab-item>
        <tab-item id="订单">
            <img slot="icon" src="http://placehold.it/100x100">
            订单
        </tab-item>
        <tab-item id="发现">
            <img slot="icon" src="http://placehold.it/100x100">
            发现
        </tab-item>
        <tab-item id="我的">
            <img slot="icon" src="http://placehold.it/100x100">
            我的
        </tab-item>
    </tab-bar>
   
</div>
</template>

<script>
	
</script>

<style>
img{
    width: 100%;
}
</style>

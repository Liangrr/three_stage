import Swiper from './swiper/Swiper.vue'
import SwiperItem from './swiper/SwiperItem.vue'

import TabBar from './tabbar/TabBar.vue'
import TabItem from './tabbar/TabItem.vue'



export default {
    install(Vue){
        console.log('HelloUI install');
        Vue.component('swiper', Swiper);
        Vue.component('swiper-item', SwiperItem);
        Vue.component('tab-bar', TabBar);
        Vue.component('tab-item', TabItem);
    }
}
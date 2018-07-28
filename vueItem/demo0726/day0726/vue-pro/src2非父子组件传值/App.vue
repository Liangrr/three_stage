<template>
<div id="app">

    <com-one/>

    <hr/>

    <input type="checkbox" v-model="isShow">
    <com-two v-if="isShow"/>

</div>
</template>

<script>
import Com1 from './ComOne.vue'
import Com2 from './ComTwo.vue'
export default {
    data(){
        return {
            isShow: true
        }
    },
    components: {
        'com-one': Com1,
        'com-two': Com2
    }
}
</script>

<style scoped>

</style>

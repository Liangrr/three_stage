<template>
<div class="wrap">
    <header class="header">
        <slot name="title"/>
    </header>
    <div class="content">
        <ul>
            <li>1111111111111111111111111111</li>
            <li>2222222222222222222222222</li>
            
            <li>33333333333333333333333333</li>
            <li>444444444444444444444444444444</li>
            
        </ul>
        
        <slot/>

        <slot name="title"/>


    </div>
</div>
</template>

<script>
    
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 44px;
    background: lavenderblush;
    position: absolute;
    top: 0;
    left: 0;
}
.content{
    width: 100%;
    height: 100%;
    padding-top: 44px;
    box-sizing: border-box;
    background: palegoldenrod;
}

</style>

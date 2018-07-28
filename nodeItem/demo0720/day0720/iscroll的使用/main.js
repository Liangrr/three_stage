// 创建滚动视图
// 参数1：dom选择器，或者dom对象
// 参数2：配置项
// var myScroll = new IScroll('.content', {scrollX: true, freeScroll: true, bounceEasing: 'elastic', bounceTime: 1200});

var contentDOM = document.querySelector('.content');
var myScroll = new IScroll(contentDOM, {
    //常用配置项
    // bounce: false 弹簧效果，默认值true
    click: true,//在iscroll的结构中，所有的dom不再接收点击事件，默认为false
    tap: true,//在iscroll的结构中，所有的dom不再接收tap事件，默认为false
    freeScroll: true,//xy轴自由滚动
    scrollX: true,//x轴是否可以滚动，默认为false
    scrollY: true,//y轴是否可以滚动，默认为true
    scrollbars: true,//显示滚动条
    fadeScrollbars: true,//滚动条的淡入淡出效果
    startX: 0,
    startY: 0,//x轴y轴的初始位置
    probeType: 3 //1,2,3
});


//测试scroll内部的点击事件
document.querySelector('.banner').onclick = function(){
    alert(1);
}

document.querySelector('.title').onclick = function(){
    console.log(myScroll);
    //iscroll对象的常用属性
    // myScroll.x  当前的x轴的平移位置
    // myScroll.y  当前的y轴的平移位置

    // myScroll.maxScrollX 最大滚动范围
    // myScroll.maxScrollY 最大滚动范围

    // 滚动视图
    // myScroll.scroller
    // myScroll.scrollerWidth
    // myScroll.scrollerHeight

    // 滚动容器
    // myScroll.wrapper
    // myScroll.wrapperWidth
    // myScroll.wrapperHeight

    // 可执行的方法:

    // 滚动到指定的位置
    // 参数1,2: x轴 y轴位置
    // 参数3：时间
    // myScroll.scrollTo(-50, -50, 300);

    // 更新滚动视图
    myScroll.refresh();
    
}

// 滚动的事件
myScroll.on('beforeScrollStart', function(){
    console.log('滚动开始前.....');
});
myScroll.on('scrollCancel', function(){
    console.log('滚动取消.....');
});
myScroll.on('scrollStart', function(){
    console.log('滚动开始.....');
});
myScroll.on('scroll', function(){
    console.log('滚动中.....');
});
myScroll.on('scrollEnd', function(){
    console.log('滚动停止.....');
});







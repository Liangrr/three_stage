// 创建滚动视图
var contentDOM = document.querySelector('.content');
var myScroll = new IScroll(contentDOM, {
    startY: -50,
    probeType: 3
});


let refreshIcon = document.querySelector('.refresh b');
let refreshText = document.querySelector('.refresh span');

myScroll.on('scrollEnd', function(){
    console.log(myScroll.y);
    var y = myScroll.y;

    //停止滚动，可以看到所有的刷新的dom结构
    if(y >= 0){
        refreshIcon.innerText = '★';
        refreshIcon.className = 'active';
        refreshText.innerText = '正在刷新...';

        //请求新的数据
        setTimeout(function(){
            console.log('下拉刷新的请求完成');

            myScroll.scrollTo(0, -50, 200);
            refreshIcon.innerText = '↓';
            refreshIcon.className = '';
            refreshText.innerText = '下拉可以刷新...';


        }, 2000);


    }
    //停止滚动，可以看到部分的刷新的dom结构
    else if(y < 0 && y > -50){
        myScroll.scrollTo(0, -50, 200);
    }


})


myScroll.on('scroll', function(){
    var y = myScroll.y;
    //正在滚动，可以看到所有的刷新的dom结构
    // 提示用户可以释放刷新
    if(y >= 0){
        refreshIcon.className = 'up';
        refreshText.innerText = '释放立即刷新...';
    }
    //正在滚动，可以看到部分的刷新的dom结构
    //提醒用户继续下拉可以刷新
    else if(y < 0 && y > -50){
        refreshIcon.className = '';
        refreshText.innerText = '下拉可以刷新...';



    }
})




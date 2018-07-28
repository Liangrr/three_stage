// 创建滚动视图
var contentDOM = document.querySelector('.content');
var myScroll = new IScroll(contentDOM, {
    startY: -50,
    probeType: 3
});


/*****************下拉刷新*********************/

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


/*****************上拉加载更多*********************/
let loadmoreIcon = document.querySelector('.loadmore .b');
let loadmoreText = document.querySelector('.loadmore span:nth-of-type(2)');
myScroll.on('scrollEnd', function(){

    var maxY = myScroll.maxScrollY;
    var y = myScroll.y;

    // 可以显示部分上拉加载更多的dom
    if( y > maxY && y < (maxY + 50)){
        //收起加载更多的dom
        myScroll.scrollTo(0, (maxY+50), 300);
    }

    // 可以显示全部上拉加载更多的dom
    else if( y <= maxY ){
        //执行加载更多
        loadmoreIcon.innerText = '★';
        loadmoreText.innerText = '正在加载中...';
        loadmoreIcon.className = 'b active';

        // ajax请求下一页数据
        setTimeout(function(){
            //请求完成时，关闭动画
            loadmoreIcon.innerText = '↑';
            loadmoreText.innerText = '上拉可以加载更多...';
            loadmoreIcon.className = 'b';

            //请求成功
            {
            //请求内容撑开了推荐商品的高度
            document.querySelector('.goodslist').style.height = '800px';
             // 刷新滚动视图
            myScroll.refresh();
            }
            //请求失败
            {
            //myScroll.scrollTo(0, (maxY+50), 300);
            }
        }, 2000);

    }



})

myScroll.on('scroll', function(){
    var maxY = myScroll.maxScrollY;
    var y = myScroll.y;
    // 可以显示部分上拉加载更多的dom
    //提示用户上拉可以加载跟多
    if( y > maxY && y < (maxY + 50)){
        loadmoreIcon.className = 'b';
        loadmoreText.innerText = '上拉可以加载更多...';
    }

    // 可以显示全部上拉加载更多的dom
    //提示用户释放立即加载
    else if( y <= maxY ){
        loadmoreIcon.className = 'b down';
        loadmoreText.innerText = '释放立即加载更多...';
    }
})




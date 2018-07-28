
//异步操作。
// 西部硅谷到深圳大学
// 第一步 西部硅谷==>经纬度
// 第二步 深圳大学==>经纬度
// 第三步 两个经纬度传给百度地图后台，进行路线规划


let p = new Promise((resolve, reject)=>{
    console.log('第一步 西部硅谷==>经纬度');
    setTimeout(() => {
        //西部硅谷经纬度的结果
        let longitutde = 113;
        let latitude = 22;
        resolve({longitutde, latitude});
    }, 1000);
})

p.then(
    (result)=>{
        let p2= new Promise((resolve, reject)=>{
            console.log('第二步 深圳大学==>经纬度');
            setTimeout(() => {
                //深圳大学经纬度的结果
                let longitutde = 113.6;
                let latitude = 22.12;
                resolve([result, {longitutde, latitude}]);
            }, 1500);
        });
        return p2;
    }
)
.then(
    (result)=>{
        console.log('第三步 两个经纬度传给百度地图后台，进行路线规划');
        console.log(result);
        
    }
);


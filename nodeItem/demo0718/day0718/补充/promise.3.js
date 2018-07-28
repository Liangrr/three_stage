
//异步操作。
// 西部硅谷到深圳大学
// 第一步 西部硅谷==>经纬度, 深圳大学==>经纬度
// 第二步 两个经纬度传给百度地图后台，进行路线规划


let p1 = new Promise((resolve, reject)=>{
    console.log('第一步 西部硅谷==>经纬度');
    setTimeout(() => {
        let longitude = 113;
        let latitude = 22;

        // resolve({longitude, latitude});
        reject('对不起，找不到该地址');
    }, 1000);
})

let p2 = new Promise((resolve, reject)=>{
    console.log('第一步 深圳大学==>经纬度');
    setTimeout(() => {
        let longitude = 113.4;
        let latitude = 22.12;

        resolve({longitude, latitude});
        
    }, 2000);
})

//all方法接收一个参数，为数组，数组中的对象就是promise对象
// all方法中接收的所有promise调用了resolve就执行then中的resolve
// all方法中接收的所有promise中只要有一个调用了reject就执行then中的reject，或catch
// Promise.all([p1, p2])
// .then(
//     (result)=>{
//         console.log('转换完成');
//         console.log(result);
//     },
//     (error)=>{
//         console.log('转换失败');
//         console.log(error);
//     }
// )

//race方法接收一个参数，为数组，数组中的对象就是promise对象
// 谁先执行完谁就是race的结果
Promise.race([p1, p2])
.then(
    (result)=>{
        console.log('转换完成');
        console.log(result);
    },
    (error)=>{
        console.log('转换失败');
        console.log(error);
    }
)


let p = new Promise((resolve, reject)=>{
    //....
    //promise内部有异常捕获，代码执行报错，promise内部调用reject
    '12345'.map(item=>{
        console.log(item);
    })

    setTimeout(() => {
        resolve();
    }, 1000);

    // resolve(result);

    // reject(error);
})

p.then(
    (result)=>{//resolve
        console.log('resolve调用了');
    },
    (error)=>{//reject
        console.log('reject调用了');
        console.log(error);
    }
)


// p.then(
//     (result)=>{//resolve
//         console.log('resolve调用了');
//     }
// )
// .catch(
//     (error)=>{//reject
//         console.log('reject调用了2');
//     }
// )
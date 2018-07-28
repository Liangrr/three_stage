let callbackMap = {};


export default {
    // 添加事件监听
    $on: function(eventName, callback){
        // 按名字保存所有的回调函数

        //1.判断callbackMap是否保存过相同的事件
        if(!callbackMap[eventName]){
            callbackMap[eventName] = [];//没有，就设置一个保存的容器
        }

        // 2.将callback放在容器中
        callbackMap[eventName].push(callback);

        // console.log(callbackMap);
    },
    // 触发事件
    $emit: function(eventName, ...rest){
        // 按名字调用保存的所有的回调函数
        // 1.按照名字取出所有的回调
        let callbackArr = callbackMap[eventName];
        if(!callbackArr){
            return;//没有监听的回调
        }
        // 2.一个一个调用回调，并且传参
        callbackArr.map(callbackItem=>{
            callbackItem(...rest);
        })

    },
    // 移除事件
    $off: function(eventName, callback){
        if(!eventName){
            //移除所有事件监听
            callbackMap = {};
            return;
        }
        if(eventName && (!callback)){
            //移除指定事件的所有监听
            callbackMap[eventName] = [];
        }
        if(eventName && callback){
            //移除指定事件的指定的某一个监听
            //获得所有的回调
            let callbackArr = callbackMap[eventName];
            // 从数组中删除对应的需要移除的事件
            callbackMap[eventName] = callbackArr.filter(callbackItem=>{
                return callbackItem != callback;
            })
        }
    

    }
}

export default {
    $on: function(eventName, callback){
        // 根据事件名字获得了回调
        // 保存所有的回调函数
    },
    
    $emit: function(eventName, ...rest){
        // 根据事件名字，调用对应的回调函数
        // 调出来之前保存的相同事件名字的回调函数，一个一个执行。
    },





    $off: function(){
        
    }
}
/*求数组中的最大值*/
function getMax(arr){
    if(arr.length > 0){

        var max = arr[0];
        //求最大值
        for(var i = 0; i < arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
            }
        }

        return max;

    }
    else{
        return;
    }
}
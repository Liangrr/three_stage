const fs = require('fs');



function getDirInfo(path){
    //判断是否为文件夹
    if(!fs.statSync(path).mode == '16822'){
        //不是文件夹
        return;
    }

    //是文件夹
    let dirObj = {};
    let dirArr = fs.readdirSync(path);
    dirArr.map(item=>{//文件夹中的每一项
        //对每一项进行判断，判断是否为文件或文件夹
        let fullPath = path +'/'+ item;
        if(fs.statSync(fullPath).mode == '16822'){
            //文件夹
            dirObj[item] = getDirInfo(fullPath);

        }else{
            //文件
            dirObj[item] = true;
        }
    })

    return dirObj;

}


let result = getDirInfo('D:/gift');

fs.writeFileSync('./data.json', JSON.stringify(result));




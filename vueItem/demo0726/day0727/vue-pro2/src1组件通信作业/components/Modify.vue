<template>
<div id="modify">
    <h1>修改</h1>
    <p>
        姓名：
        <input type="text" v-model="modifyInfo.name">
    </p>
    <p>
        性别：
        <label v-for="(sexItem, index) in sexArr" :key="index">
            <input type="radio" :value="sexItem" v-model="modifyInfo.sex"/>{{sexItem}}
        </label>
    </p>
    <p>
        感兴趣方向：
        <label v-for="(courseItem, index) in courseArr" :key="index">
            <input type="checkbox" :value="courseItem" v-model="modifyInfo.course">{{courseItem}}
        </label>
    </p>
    <p>
        毕业时间：
        <select v-model="modifyInfo.year">
            <option v-for="(yearItem, index) in yearArr" :value="yearItem" :key="index">
                {{yearItem}}
            </option>
        </select>
    </p>
    <p>
        备注:
        <textarea v-model="modifyInfo.des"></textarea>
    </p>
    <p>
        <button @click="finishModifyAction()">修改</button>
        <button @click="cancelModifyAction()">取消</button>
    </p>
</div>
</template>

<script>
export default {
    data(){
        return {
            // 使用的初始数据
            sexArr: ['男', '女'],
            courseArr: ['html5', 'ui', 'java', 'python', '大数据', '测试'],
            yearArr: [],

            modifyInfo: {}
        }
    },
    methods: {
        //修改完成事件
        finishModifyAction(){
            // 将修改好的数据给list组件
            this.$center.$emit('finish-modify', Object.assign({}, this.modifyInfo));
            // 显示回新增
            this.cancelModifyAction();
        },
        //取消修改事件
        cancelModifyAction(){
            this.$emit('cancel');
        }
    },
    created() {
        for(var i = 0; i < 10; i++){
            this.yearArr.push(2010+i);
        }
        
        //监听修改事件
        this.$center.$on('modify-data', (info)=>{
            this.modifyInfo = info;
        })
        
    },
}
</script>

<style>

</style>

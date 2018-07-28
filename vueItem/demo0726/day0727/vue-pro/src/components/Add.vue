<template>
<div id="add">
    <h1>新增</h1>
    <p>
        姓名：
        <input type="text" v-model="name">
    </p>
    <p>
        性别：
        <label v-for="(sexItem, index) in sexArr" :key="index">
            <input type="radio" :value="sexItem" v-model="sex"/>{{sexItem}}
        </label>
    </p>
    <p>
        感兴趣方向：
        <label v-for="(courseItem, index) in courseArr" :key="index">
            <input type="checkbox" :value="courseItem" v-model="course">{{courseItem}}
        </label>
    </p>
    <p>
        毕业时间：
        <select v-model="year">
            <option v-for="(yearItem, index) in yearArr" :value="yearItem" :key="index">
                {{yearItem}}
            </option>
        </select>
    </p>
    <p>
        备注:
        <textarea v-model="des"></textarea>
    </p>
    <p>
        <button @click="addAction()">新增</button>
        <button @click="cancelAddAction()">取消</button>
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
            //用户选择的值
            name: '',
            sex: '',
            course: [],
            year: '',
            des: ''
        }
    },
    methods: {
        addAction(){
            console.log('新增事件');
            // 触发新增事件
            this.$center.$emit('add-data', {
                name: this.name,
                sex: this.sex,
                course: this.course,
                year: this.year,
                des: this.des
            });
            // 清空输入框
            this.cancelAddAction();
        },
        cancelAddAction(){
            console.log('取消新增事件');
            this.name = '';
            this.sex = '';
            this.course = [];
            this.year = '';
            this.des = '';
        }
    },
    created() {
        for(var i = 0; i < 10; i++){
            this.yearArr.push(2010+i);
        }
    }
}
</script>

<style>

</style>

<template>
	<div class="register">
		<h3>个人信息</h3>
		<span>姓名:</span>
		<input type="text" v-model="name" />
		<br />
		
		<span>性别:</span>
		<label v-for="sexItem in sexArr">
			<input type="radio" v-model="sex" :value="sexItem"/>{{sexItem}}
		</label>
		<br />
		
		<span>毕业时间:</span>
		<select v-model="year">
            <option v-for="yearItem in yearArr" :value="yearItem">
                {{yearItem}}
            </option>
        </select>
		<br />
		
		<span>兴趣:</span>
		<label v-for="hobbyItem in hobbyArr">
            <input type="checkbox" :value="hobbyItem" v-model="hobby">{{hobbyItem}}
        </label>
		<br />
		
		<span class="bz">简介:</span>
		<textarea v-model="des"></textarea>
		<br />
		
		<button @click="addAction()">新增</button>
		<button @click="cancelAddAction()">取消</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				sexArr:['男','女'],	//性别
				yearArr:[],	//毕业年份
				hobbyArr:['html5', 'ui', 'java'],//兴趣
//				用户选择的属性
				name:'',
				sex:'',
				hobby:[],
				year:'',
				des:'',
			}
		},
		methods:{
			addAction(){
				var personInfo = {
	                name: this.name,
	                sex: this.sex,
	                hobby: this.hobby,
	                year: this.year,
	                des: this.des
	        	}

                this.$center.$emit('add-data',Object.assign({},personInfo));
                //清空输入框
				this.cancelAddAction();
			},
			cancelAddAction(){
				this.name = '';
                this.sex = '';
                this.hobby = [];
                this.year = '';
                this.des = '';
			}
		},
		created(){
		    for(var i = 0; i < 10; i++){
		        this.yearArr.push(2010+i);
		    }
		}
	}
</script>

<template>
	<div class="modify">
		<h3>修改</h3>
		<span>姓名:</span>
		<input id="name" type="text" v-model="modifyInfo.name" />
		<br />
		
		<span>性别:</span>
		<label v-for="sexItem in sexArr">
			<input type="radio" v-model="modifyInfo.sex" :value="sexItem"/>{{sexItem}}
		</label>
		<br />
		
		<span>毕业时间:</span>
		<select v-model="modifyInfo.year">
            <option v-for="yearItem in yearArr" :value="yearItem">
                {{yearItem}}
            </option>
        </select>
		<br />
		
		<span>兴趣:</span>
		<label v-for="hobbyItem in hobbyArr">
            <input type="checkbox" :value="hobbyItem" v-model="modifyInfo.hobby">{{hobbyItem}}
        </label>
		<br />
		
		<span class="bz">简介:</span>
		<textarea v-model="modifyInfo.des"></textarea>
		<br />
		
		<button @click="finishModifyAction()">修改</button>
        <button @click="cancelModifyAction()">取消</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				sexArr:['男','女'],	//性别
				yearArr:[],	//毕业年份
				hobbyArr:['html5', 'ui', 'java'],//兴趣
				modifyInfo:{}
			}
		},
		methods:{
			finishModifyAction(){
				
				this.$center.$emit('finish-modify',Object.assign({},this.modifyInfo));
				// 显示回新增
				this.cancelModifyAction();
			},
			cancelModifyAction(){
				this.$emit('cancel');
			}
		},
		created(){
			for(var i = 0; i < 10; i++){
		        this.yearArr.push(2010+i);
		    }
			this.$center.$on('modify-data',(modifyVal)=>{
				this.modifyInfo = modifyVal;
			})
		}
	}
</script>
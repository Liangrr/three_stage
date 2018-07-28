<template>
	<ul class="list">
		<h3>列表</h3>
		<li v-for="(item,index) in dataSource">
			{{item.name}}
			<button @click.stop="deleteAction(index)">删除</button>
        	<button @click.stop="showAction(index)">查看</button>
        	<button @click.stop="modifyAction(index)">修改</button>
		</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return {
				dataSource:[],
				dataIndex:-1,
			}
		},
		methods:{
			deleteAction(index){
				this.dataSource.splice(index, 1);
			},
			showAction(index){
//				查看,非父子组件传值,
				this.$center.$emit('show-data',Object.assign({},this.dataSource[index]));
			},
			modifyAction(index){
//				进入修改区域
				this.$center.$emit('modify-data',Object.assign({},this.dataSource[index]));
//				保存修改的索引值
				this.dataIndex = index;
			}
		},
		created(){
//			这里是添加-函数利用非父子组件传值
			this.$center.$on('add-data',(personInfo)=>{
//				把添加的数据加到dataSource这个数组里
				this.dataSource.push(personInfo)
			}),
//			修改完成,传值返回来,利用修改时保存的索引来进行保存到相应的位置
			this.$center.$on('finish-modify',(modifyVal)=>{
				
				this.dataSource.splice(this.dataIndex, 1, modifyVal);
            	this.dataIndex = -1;
			})
		}
	}
</script>
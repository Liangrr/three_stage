const name = 'liangrr';

new Promise((resolve,reject)=>{
	console.log('执行promise');
	resolve('传参进成功函数');
}).then(
	(res)=>{
		console.log(res);
	}
)

class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	eat(){
		console.log(`${this.name} ${this.age}岁就具备捕食的能力!`);
	}
}

var per = new Person('老王',18);
per.eat();



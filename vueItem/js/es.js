const name = 'wang';
class Animal{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	eat(){
		console.log(this.name + '特能吃!');
	}
	run(){
		console.log(this.age + '就能跑的贼快!');
	}
}

class Dragon extends Animal{
	constructor(name,age,color){
		super(name,age);
		this.color = color;
	}
}

let aimi = new Dragon('aimi',18,'red');
aimi.eat();
aimi.run();

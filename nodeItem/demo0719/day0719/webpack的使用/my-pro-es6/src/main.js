const message = 'hello world';

new Promise((resolve, reject)=>{
    console.log(111111111111);
    resolve();
})
.then(
    ()=>{
        console.log('成功');
    }
)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    say(){
        console.log(`name:${this.name}, age:${this.age}`);
    }
}

let p1 = new Person('张三', 10);
p1.say();


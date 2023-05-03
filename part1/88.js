// // super 
// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name,age);
//         this.speed = speed;
//     }

//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// } 
// // object / instance 
// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());
// /


class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} eats food`;
    }

    iscute()
    {
        return this.age<8;
    }
    issupercute()
    {
        return this.age<3;
    }
}

class dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }

    run()
    {
        return `${this.name} runs at a speed of ${this.speed}`;
    }
}

const animal1=new dog("tommy",12,19);
console.log(animal1);
console.log(animal1.run());
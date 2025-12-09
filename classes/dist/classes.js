"use strict";
// class dataManager {
//    static myData:number[] = []
//    static pushData(data:number){
//         this.myData.push(data)
//     }
//     static getData(){
//         console.log(this.myData)
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// dataManager.pushData(10)
// dataManager.pushData(20)
// dataManager.pushData(30)
// dataManager.pushData(40)
// dataManager.getData()
// class Intro  {
//      name:string
//      email:string
//      password:string
//     constructor(name:string,email:string,password:string){
//         this.name = name,
//         this.email = email,
//         this.password = password 
//     }
//      sayName(){
//         console.log(`${this.name}`)
//      }  
//      sayEmail(){
//         console.log(`${this.email}`)
//      }
// }
// const newUser = new Intro("deepanshu","deepanshu@gmail.com","12334444")
// newUser.sayName()
// newUser.sayEmail()
// visiblity modifiers in classes 
// public -- allow access to class members from anywhere
// private -- allow access to class members within the class 
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person1 = new Person("deepanshu");
console.log(person1.getName());
/// Inheritance Implements 
// interface Shape {
//    getArea:()=>{}
// }
// class Rectangle implements Shape {
//      constructor(protected readonly width:number,protected readonly height:number){
//       this.height = height,
//       this.width = width
//      }
//      public getArea():number{
//        return this.width * this.height
//      }
// }
// const rect = new Rectangle(10,20)
// console.log(rect.getArea())
class Fruit {
    fruits = [];
    constructor(myArr) {
        this.fruits = myArr;
    }
    getFruits() {
        console.log(this.fruits);
    }
}
const f1 = new Fruit(["apple", "banana", "mango"]);
f1.getFruits();
//# sourceMappingURL=classes.js.map
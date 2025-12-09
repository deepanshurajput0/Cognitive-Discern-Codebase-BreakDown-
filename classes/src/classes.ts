// class dataManager {
//    static myData:number[] = []
//    static pushData(data:number){
//         this.myData.push(data)
//     }
//     static getData(){
//         console.log(this.myData)
//     }
// }



// dataManager.pushData(10)
// dataManager.pushData(20)
// dataManager.pushData(30)
// dataManager.pushData(40)


// dataManager.getData()






class Intro  {
     name:string
     email:string
     password:string

    constructor(name:string,email:string,password:string){
        this.name = name,
        this.email = email,
        this.password = password 
    }
     sayName(){
        console.log(`${this.name}`)
     }  
     sayEmail(){
        console.log(`${this.email}`)
     }

}

const newUser = new Intro("deepanshu","deepanshu@gmail.com","12334444")

newUser.sayName()
newUser.sayEmail()



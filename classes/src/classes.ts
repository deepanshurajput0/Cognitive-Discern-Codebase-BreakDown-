



class dataManager {
   static myData:number[] = []
   static pushData(data:number){
        this.myData.push(data)
    }
    static getData(){
        console.log(this.myData)
    }
}



dataManager.pushData(10)
dataManager.pushData(20)
dataManager.pushData(30)
dataManager.pushData(40)


dataManager.getData()


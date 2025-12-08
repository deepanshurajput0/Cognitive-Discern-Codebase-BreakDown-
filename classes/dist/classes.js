"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class dataManager {
    static myData = [];
    static pushData(data) {
        this.myData.push(data);
    }
    static getData() {
        console.log(this.myData);
    }
}
dataManager.pushData(10);
dataManager.pushData(20);
dataManager.pushData(30);
dataManager.pushData(40);
dataManager.getData();
//# sourceMappingURL=classes.js.map
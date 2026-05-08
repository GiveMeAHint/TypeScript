"use strict";
const Ivan = {
    id: 1,
    name: "Ivan",
    surname: "Ivanov",
    coins: 5,
    age: 25,
    addCoin(amount) {
        this.coins += amount;
    },
    removeCoin(amount) {
        this.coins -= amount;
    },
    getCoins() {
        return `Количество монет ${this.coins}`;
    },
    anyParameter: "anyValue",
};
class AnyClass {
    id = 1;
    name = "Ivan";
    surname = "Ivanov";
    coins = 5;
    age = 25;
    anyParameter = "anyValue";
    anyParameter2 = "дополнительное свойство";
    _coins = this.coins;
    addCoin(amount) {
        this._coins += amount;
    }
    removeCoin(amount) {
        this._coins -= amount;
    }
    getCoins() {
        return `Количество монет ${this._coins}`;
    }
}
//Взяла проверку из тренажера на сайте
const userInstance = new AnyClass();
userInstance.anyParameter2 = "дополнительное свойство";
userInstance.addCoin(3);
console.log(userInstance.getCoins());
userInstance.removeCoin(2);
console.log(userInstance.getCoins());
console.log(userInstance.anyParameter2);

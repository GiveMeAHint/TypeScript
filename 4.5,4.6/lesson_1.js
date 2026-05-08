"use strict";
class User {
    static userName;
    surname;
    age;
    constructor(name, surname, age) {
        User.userName = name;
        this.age = age;
        this.surname = surname;
    }
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
const ivan = new User("Ivan", "Ivanov", 25);
//Взяла проверку из тренажера на сайте
console.log("User Name (static):", User.userName);
console.log("Age:", ivan.getAge());

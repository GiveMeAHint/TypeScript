"use strict";
const add = (a, b) => {
    return "string or number";
};
//Взяла проверку из тренажера на сайте
const car = {
    model: "BMW X5",
    price: 75000,
    dynamic_1: { color: "black", type: "SUV" },
    dynamic_2: { fuel: "petrol", transmission: "automatic" },
    turple: ["BMW", 2021, "Germany"]
};
console.log("Модель автомобиля:", car.model);
console.log("Цена автомобиля:", car.price);
console.log("Динамическая информация 1:", car.dynamic_1);
console.log("Динамическая информация 2:", car.dynamic_2);
console.log("Кортеж с дополнительной информацией:", car.turple);

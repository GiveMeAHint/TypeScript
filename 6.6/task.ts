interface Car {
	model: string;
	price: number;
	dynamic_1: Record<string, string>;
	dynamic_2: { [index: string]: number };
	tuple: [string, number, string];
}

const add = (a: string | number, b: string | number): string | number => {
	return "string or number";
};

type CarKeys = keyof Car;

//Взяла проверку из тренажера на сайте

const car: Car = {
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

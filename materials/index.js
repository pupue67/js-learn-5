"use strict";

function section(title) {
  console.log(`\n=== ${title} ===`);
}

section("1. Создание объекта");

const user = {
  name: "Alex",
  age: 20,
  isAdmin: false,
};

console.log(user);

section("2. Точка и квадратные скобки");

console.log(user.name);
console.log(user["age"]);

const selectedKey = "name";
console.log(user[selectedKey]);

section("3. Добавление и изменение свойств");

user.age = 21;
user.city = "Алматы";

console.log(user);

section("4. const не делает объект неизменяемым");

const settings = {
  theme: "light",
};

settings.theme = "dark";
settings.language = "ru";

console.log(settings);

section("5. Удаление свойства");

const profile = {
  login: "student",
  email: "student@example.com",
  temporaryCode: "1234",
};

delete profile.temporaryCode;

console.log(profile);

section("6. Проверка свойства");

console.log("login" in profile);
console.log("age" in profile);
console.log(Object.hasOwn(profile, "email"));

section("7. Перебор объекта через for...in");

const student = {
  name: "Иван",
  age: 19,
  group: "ПВ-221",
};

for (const key in student) {
  console.log(key, student[key]);
}

section("8. Object.keys / values / entries");

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
console.log("Количество свойств:", Object.keys(student).length);

section("9. Object.values + for...of");

for (const value of Object.values(student)) {
  console.log(value);
}

section("10. Object.entries + деструктуризация");

for (const [key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}

section("11. Вычисляемое имя свойства");

const fieldName = "score";

const result = {
  [fieldName]: 95,
};

console.log(result);

section("12. Сокращённая запись свойств");

const name = "Мария";
const age = 18;

const shortStudent = {
  name,
  age,
};

console.log(shortStudent);

section("13. Метод объекта");

const account = {
  login: "alex",

  getLogin() {
    return this.login;
  },
};

console.log(account.getLogin());

section("14. Метод с this");

const product = {
  name: "Keyboard",
  price: 12000,
  quantity: 2,

  getTotal() {
    return this.price * this.quantity;
  },
};

console.log(product.getTotal());

product.quantity = 3;
console.log(product.getTotal());

section("15. Почему стрелочная функция отличается");

const arrowExample = {
  name: "Alex",

  // У стрелочной функции нет собственного this.
  // Поэтому для метода, которому нужен this, пока используем обычный синтаксис.
  getName() {
    return this.name;
  },
};

console.log(arrowExample.getName());

section("16. Вложенный объект и массив");

const learner = {
  name: "Иван",
  grades: [5, 4, 5],
  address: {
    city: "Алматы",
    street: "Абая",
  },
};

console.log(learner.grades[1]);
console.log(learner.address.city);

section("17. Массив объектов");

const products = [
  { name: "Mouse", price: 5000 },
  { name: "Keyboard", price: 12000 },
  { name: "Monitor", price: 85000 },
];

for (const item of products) {
  console.log(item.name, item.price);
}

section("18. filter с массивом объектов");

const expensive = products.filter((item) => item.price >= 10000);
console.log(expensive);

section("19. Поиск самого дорогого товара обычным циклом");

let mostExpensive = products[0];

for (const item of products) {
  if (item.price > mostExpensive.price) {
    mostExpensive = item;
  }
}

console.log(mostExpensive);

section("20. Поверхностное копирование через spread");

const original = {
  name: "Alex",
  age: 20,
};

const copy = {
  ...original,
};

copy.age = 21;

console.log("original:", original);
console.log("copy:", copy);

section("21. Объединение объектов");

const baseUser = {
  name: "Alex",
  age: 20,
};

const extra = {
  age: 21,
  city: "Алматы",
};

const merged = {
  ...baseUser,
  ...extra,
};

console.log(merged);

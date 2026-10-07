"use strict";

const assert = require("node:assert/strict");
const student = require("./student-template.js");

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(`  ${error.message}`);
    process.exitCode = 1;
  }
}

test("1. Получение свойства по ключу", () => {
  const user = { name: "Alex", age: 20, city: "Алматы" };

  assert.equal(student.getProperty(user, "name"), "Alex");
  assert.equal(student.getProperty(user, "age"), 20);
  assert.equal(student.getProperty(user, "city"), "Алматы");
  assert.equal(student.getProperty(user, "missing"), undefined);
});

test("2. Количество свойств", () => {
  assert.equal(student.countProperties({}), 0);
  assert.equal(student.countProperties({ name: "Alex" }), 1);
  assert.equal(student.countProperties({ a: 1, b: 2, c: 3 }), 3);
  assert.equal(student.countProperties({ name: "Ivan", grades: [5, 4], active: true }), 3);
});

test("3. Сумма числовых свойств", () => {
  assert.equal(
    student.sumNumericProperties({ price: 100, quantity: 3, title: "Book" }),
    103
  );

  assert.equal(
    student.sumNumericProperties({ a: 10, b: -5, c: 2.5, enabled: true }),
    7.5
  );

  assert.equal(
    student.sumNumericProperties({ name: "Alex", active: false }),
    0
  );
});

test("4. Объект товара с методом", () => {
  const product = student.createProduct("Keyboard", 12000, 2);

  assert.equal(product.name, "Keyboard");
  assert.equal(product.price, 12000);
  assert.equal(product.quantity, 2);
  assert.equal(typeof product.getTotal, "function");
  assert.equal(product.getTotal(), 24000);

  product.quantity = 3;
  assert.equal(product.getTotal(), 36000);

  product.price = 10000;
  assert.equal(product.getTotal(), 30000);
});

test("5. Средний балл студента", () => {
  assert.equal(
    student.calculateAverageGrade({ name: "Иван", grades: [5, 4, 3, 4] }),
    4
  );

  assert.equal(
    student.calculateAverageGrade({ name: "Мария", grades: [5, 5, 4, 5] }),
    4.75
  );

  assert.equal(
    student.calculateAverageGrade({ name: "Пётр", grades: [3] }),
    3
  );

  assert.equal(
    student.calculateAverageGrade({ name: "Анна", grades: [] }),
    0
  );
});

test("6. Самый дорогой товар", () => {
  const products = [
    { name: "Mouse", price: 5000 },
    { name: "Keyboard", price: 12000 },
    { name: "Monitor", price: 85000 },
  ];

  assert.strictEqual(student.findMostExpensiveProduct(products), products[2]);

  const one = [{ name: "Book", price: 2500 }];
  assert.strictEqual(student.findMostExpensiveProduct(one), one[0]);

  const tie = [
    { name: "A", price: 100 },
    { name: "B", price: 100 },
    { name: "C", price: 90 },
  ];
  assert.strictEqual(student.findMostExpensiveProduct(tie), tie[0]);

  assert.equal(student.findMostExpensiveProduct([]), null);
});

if (!process.exitCode) {
  console.log("\nВсе тесты пройдены.");
}

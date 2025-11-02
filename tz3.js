// ПОиск товаров с низким запасом
// Напишите функцию findLowStock(threshold) которая
// возвращает массив названий товаров кол-во которых ниже определенного порога
// используйте Object.entries() для работы с идентификатором и данными каждого товара

const inventory = [
  { id: 1, name: "Apple", price: 0.5, quantity: 200 },
  { id: 2, name: "Banana", price: 0.3, quantity: 150 },
  { id: 3, name: "Cherry", price: 0.9, quantity: 50 },
];

const findLowStock = (threshold) => {
  const result = [];

  const inventoryObj = {};
  inventory.forEach((item) => {
    inventoryObj[item.id] = item;
  });

  for (const [id, product] of Object.entries(inventoryObj)) {
    if (product.quantity < threshold) {
      result.push(product.name);
    }
  }

  return result;
};

console.log(findLowStock(100));
console.log(findLowStock(200));

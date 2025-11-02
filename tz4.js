const inventory = [
  { id: 1, name: "Apple", price: 0.5, quantity: 200 },
  { id: 2, name: "Banana", price: 0.3, quantity: 150 },
  { id: 3, name: "Cherry", price: 0.9, quantity: 50 },
];

const totalInventoryValue = () => {
  return inventory.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

console.log(totalInventoryValue())
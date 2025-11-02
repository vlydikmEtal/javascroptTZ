
// отображение названий продуктов
const inventory = [
  {id: 1, name: 'Apple', price: 0.50, quantity: 200},
  {id: 2, name: 'Banana', price: 0.30, quantity: 150},
  {id: 3, name: 'Cherry', price: 0.90, quantity:50},
]

inventory.map((item) => {
  console.log(`Продукты на складе: ${item.name} цена: ${item.price} количество: ${item.quantity}`)
})

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

// const a = -1

// if (a < 0) {
//   console.log('Число отрицальтельное')
// } else {
//     console.log('Число положительное')
// }

// Дана строка. Выведите в консоль длину этой строки.

// const a = 'vladislav'

// console.log(a.length)

// Дана строка. Выведите в консоль последний символ строки.

// const a = 'vladislav1'

// console.log(a.slice(-1))

// Дано число. Проверьте, четное оно или нет.

// const a = 123123;

// if (a === 0 % 2) {
//   console.log("Число четное");
// } else {
//   console.log("Число нечетное");
// }

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const a = "Vlad";
// const b = "vAnton";

// if (a[0].toLowerCase() === b[0].toLowerCase()) {
//   console.log("Да");
// } else {
//   console.log("Нет");
// }

//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const a = "vladislav2dddd";

// if (a.slice(a.length - 1) === "ь") {
//   console.log(a.charAt(a.length - 2));
// } else {
//   console.log(a.slice(a.length - 1));
// }

// Дано число. Выведите в консоль первую цифру этого числа.

// const a = 13343

// console.log(a.toString().charAt(0))

// Дано число. Выведите в консоль последнюю цифру этого числа.

// const a = 32433212;

// console.log(a.toString().slice(- 1));

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// function getSum(num) {
//   num = num.toString();

//   return +num[0] + +num[num.length - 1]
// }

// console.log(getSum(123458));

// Дано число. Выведите количество цифр в этом числе.

// const a = 213213

// console.log(a.toString().length)

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// const a = 213213;
// const b = 2332131;

// if (a.toString().charAt(0) === b.toString().charAt(b.length - 1)) {
//   console.log("Да");
// } else {
//   console.log("Нет");
// }


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('opened')
    })
  })
})
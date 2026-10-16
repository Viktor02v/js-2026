// Задача 7. Скласти алгоритм, який обчислює цілу і дробову частину даного числа х.
// Наприклад: число 23,56  => ціла: 23, дробова: 0,56.
const number = parseFloat(prompt('Enter some float number','1.23'))
const integer = Math.floor(number)
const float = Number((number - integer).toFixed(2))

document.write(`
  <p>The number : ${number}</p>
  <p>Number's integer : ${integer}</p>
  <p>Number's float : ${float}</p>
  `)
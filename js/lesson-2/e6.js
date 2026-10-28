// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів.
// Обчислити вартість кожного товару окремо та загальну вартість.
// Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
// довільна ціна першого товару : const firstItemPrice
// довільна ціна другого товару : const secondItemPrice
// довільна ціна третього товару : const thirdItemPrice
// довільна кількість першого товару : const firstItemQuantity
// довільна кількість другого товару : const secondItemQuantity
// довільна кількість третього товару : const thirdItemQuantity
// тотальна вартість пешого товару : const firstItemsPrice
// тотальна вартість другого товару : const secondItemsPrice
// тотальна вартість третього товару : const thirdItemsPrice
// загальна ціна усіх товарів : const totalPrice

// const DEFAULT_PRICE = 1
// const DEFAULT_QUANTITY = 1

// const firstItemPrice =  Number(prompt('Please enter the price of the first item', `${DEFAULT_PRICE}`));
// const firstItemQuantity =  parseInt(prompt('Please enter the quantity of the first item(s)', `${DEFAULT_QUANTITY}`))

// const secondItemPrice =  Number(prompt('Please enter the price of the second item',  `${DEFAULT_PRICE}`));
// const secondItemQuantity =  parseInt(prompt('Please enter the quantity of the second item(s)',  `${DEFAULT_QUANTITY}`))

// const thirdItemPrice =  Number(prompt('Please enter the price of the third item',  `${DEFAULT_PRICE}`));
// const thirdItemQuantity =  parseInt(prompt('Please enter the quantity of the third item(s)',  `${DEFAULT_QUANTITY}`))

// const firstItemsPrice = firstItemPrice * firstItemQuantity
// const secondItemsPrice = secondItemPrice * secondItemQuantity
// const thirdItemsPrice = thirdItemPrice * thirdItemQuantity

// Із використанням функції
// function sumUp(item, quantity)  {
//   return item * quantity
// }
// const firstItemsPrice = sumUp(firstItemPrice, firstItemQuantity)
// const secondItemsPrice = sumUp(secondItemPrice, secondItemQuantity)
// const thirdItemsPrice = sumUp(thirdItemPrice, thirdItemQuantity)

// const totalPrice = firstItemsPrice + secondItemsPrice + thirdItemsPrice

// document.write(`<ol>
//   <li style="margin-bottom: 10px;">First item - Price : ${firstItemPrice}, X : ${firstItemQuantity}, Total : ${firstItemsPrice} </li>
//   <li style="margin-bottom: 10px;">Seocond item - Price : ${secondItemPrice}, X : ${secondItemQuantity}, Total : ${secondItemsPrice} </li>
//   <li style="margin-bottom: 10px;">Third item - Price : ${thirdItemPrice}, X : ${thirdItemQuantity}, Total : ${thirdItemsPrice}</li>
//   <sumary style="font-size:24px;, font-weight:700;">Total Price : ${totalPrice}</sumary>
//   </ol>
// `);
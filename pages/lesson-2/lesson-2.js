// Задача 0. Обчислити значення виразів

// 1. Вираз S1=a+12+b
// довільне число : const a
// довільне число : const b
// данне число : givenNumber = 12
// сума довільних і данного чисел обсчислених за виразом : const totalSum

// export const a = parseInt(prompt('Enter the number for "a"', '0'))
// const b = parseInt(prompt('Enter the number for "b"', '0'))
// const givenNumber = 12

// const totalSum = a + b + givenNumber
// document.write('Total sum "S = a+12+b" = ',`${totalSum}`)

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

// 2. Вираз S2 = √((a + b) / (2a))
// довільне число : const a
// довільне число : const b
// сума довільних чисел обсчислених за виразом : const totalSum

// const a = parseInt(prompt('Enter the number for "a"', '0'))
// const b = parseInt(prompt('Enter the number for "b"', '0'))

// const totalSum = Math.sqrt((a + b) / (2 * a))
// document.write('Total sum "S2=a+b2a" = ',`${totalSum}`)

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

// 3. Вираз : S2 = ∛((a + b)c)
// довільне число : const a
// довільне число : const b
// довільне число : const c
// сума довільних чисел обсчислених за виразом : const totalSum

// const a = parseInt(prompt('Enter the number for "a"', '0'))
// const b = parseInt(prompt('Enter the number for "b"', '0'))
// const c = parseInt(prompt('Enter the number for "c"', '0'))

// const totalSum = Math.cbrt(( a + b ) * c)
// document.write('Total sum "S2 = ∛((a + b)c)" = ',`${totalSum}`)

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

// 4. Вираз : S4=sin⁡(a / -b) 
// довільне число : const a
// довільне число : const b
// сума довільних чисел обсчислених за виразом : const totalSum

// const a = parseInt(prompt('Enter the number for "a"', '0'))
// const b = parseInt(prompt('Enter the number for "b"', '0'))

// const totalSum = Math.sin(a / -b)
// document.write('Total sum "S4=sin⁡(a / -b)" = ',`${totalSum}`)

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
// довільне дійсне число : const a
// довільне дійсне число : const b
// сума дійсних чисел : const sum 
// добуток дійсних чисел : const product
// частка дійсних чисел : const quotient

// const a =   Number(prompt('Enter the real number for a','0'))
// const b =  Number(prompt('Enter the real number for b','0'))

// const sum = a + b
// const product = a * b
// const quotient = a / b

// document.write(`<table style="border-collapse: collapse; width: 100%;">
//   <tr>
//     <th style="border: 1px solid black; padding: 8px; width: 33.33%;">Sum</th>
//     <th style="border: 1px solid black; padding: 8px; width: 33.33%">Product</th>
//     <th style="border: 1px solid black; padding: 8px; width: 33.33%">Quotient</th>
//   </tr>
//   <tr>
//     <td style="border: 1px solid black; padding: 8px; width: 33.33%">${a} + ${b}</td>
//     <td style="border: 1px solid black; padding: 8px; width: 33.33%">${a} * ${b}</td>
//     <td style="border: 1px solid black; padding: 8px; width: 33.33%">${a} / ${b}</td>
//   </tr>
//   <tr>
//     <td style="border: 1px solid black; padding: 8px; width: 33.33%">${sum}</td>
//     <td style="border: 1px solid black; padding: 8px; width: 33.33%">${product}</td>
//     <td style="border: 1px solid black; padding: 8px; width: 33.33%">${quotient}</td>
//   </tr>
// </table>`);

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
// довільний рік народження : const yearOfBirdth 
// поточний рік : const currentYear 
// кількість років обчислених за умовою : const age

// const yearOfBirdth = parseInt(prompt('Enter your year of birdth', '2004'))
// const currentYear = 2026
// const age = currentYear - yearOfBirdth
// document.write('Your age is ',`${age}`)

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
// довільна ціна одиниці товару : const itemPrice
// довільна кількість одиниць товару : const quantity
// загальна сума одиниць товару : const totalPrice
// даний податок 5% від загальної суми : const TAX

// const itemPrice = Number(prompt('Enter the item price', '15'));
// const quantity = Number(prompt('Enter the item quantity', '20'));

// const totalPrice = itemPrice * quantity;
// const TAX = totalPrice * 0.05;

// document.write(`
//   <p>Total price: ${totalPrice}</p>
//   <p>Tax (5%): ${TAX}</p>
//   <p>Total price including tax: ${(totalPrice + TAX)}</p>
// `);

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
// метр у сантиметрах : const METER_IN_CM
// кілометр у сантиметрах : const KILOMER_IN_CM
// кількість кілометрів із довільних сантиметрів : const lengthInKm
// кількість метрів із довільних сантиметрів : const lengthInM
// довільна кількість сантиметрів : lengthInCm

// const METER_IN_CM = 100
// const KILOMER_IN_CM = 100000

// const lengthInCm = Number(prompt('Enter the length in centimeters', '15'));
// const lengthInM = lengthInCm / 100
// const lengthInKm = lengthInCm / 100000

// document.write(`
//   <p>Given length in centimeters: ${lengthInCm}</p>
//   <p>Given length in Metres : ${lengthInM}</p>
//   <p>Given Length in Kilometers : ${lengthInKm}</p>
// `);

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
// кількість секунд у хвилині : const MIN_IN_SECONDS
// кількість секунд у годині : const HOUR_IN_SECONDS
// довільна кількість секунд : const seconds
// кількість хвилин із довільних секунд : const minutes
// кількість годин із довільних секунд : const hours

// const MIN_IN_SECONDS = 60;
// const HOUR_IN_SECONDS = 60 * 60;

// const seconds = parseInt(prompt('Enter the amount of seconds', '60'));
// const minutes = Math.floor(seconds / MIN_IN_SECONDS);
// const hours = Math.floor(seconds / HOUR_IN_SECONDS);

// document.write(`
//   <p>Given seconds: ${seconds}</p>
//   <p>Hours: ${hours}</p>
//   <p>Minutes: ${minutes}</p>
// `);

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

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

//---------------------------------//---------------------------------//---------------------------------//---------------------------------

// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
// нижній ліміт генерованого номеру місяця : const MOTNH_NUMBER_FROM 
// верхній ліміт генерованого номеру місяця : const MOTNH_NUMBER_TO
// генерований номер місяця відповідаючий ліматам : const monthNumber
// нижній ліміт генерованого номеру дня : const dayNumberFrom 
// верхній ліміт генерованого номеру дня : const dayNumberTo
// генерований номер місяця відповідаючий ліматам : const dayNumber
// сума генерованих номерів місяця та дня: const sum

// const MOTNH_NUMBER_FROM  = 1
// const MOTNH_NUMBER_TO = 12 
// const monthNumber = Math.floor(Math.random() * (MOTNH_NUMBER_TO - MOTNH_NUMBER_FROM + 1)) + MOTNH_NUMBER_FROM

// const DAY_NUMBER_FROM  = 0
// const DAY_NUMBER_TO = 6
// const dayNumber = Math.floor(Math.random() * (DAY_NUMBER_TO - DAY_NUMBER_FROM + 1)) + DAY_NUMBER_FROM

// const sum = monthNumber + dayNumber

// document.write("Sum of the random month and day numbers = ", `${sum}`)
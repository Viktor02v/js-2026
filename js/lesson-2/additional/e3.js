// Задача 3. З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів.
// Вивести на екран вартість кожного з видів товарів окремо і загальну вартість.
const firstItemPrice = Number(prompt('Enter the price of the first item', '1'))
const firstItemQuantity = parseInt(prompt('Enter the quantity of the first item', '1'))
const secondItemPrice = Number(prompt('Enter the price of the second item', '1'))
const secondItemQuantity = parseInt(prompt('Enter the quantity of the second item', '1'))
const firstItemsPrice = firstItemPrice * firstItemQuantity
const seconditemsPrice = secondItemPrice * secondItemQuantity
const totalPrice = firstItemsPrice + seconditemsPrice

  document.write(`
    <ol><li>First item price = ${firstItemsPrice}</li>
    <li>Second item price = ${seconditemsPrice}</li>
    <li>Total price = ${totalPrice}</li>
    </ol>
    `)
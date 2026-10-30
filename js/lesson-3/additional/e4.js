"use strict";
// Морський бій (не обов”язкова). 
// Ворожий корабель, може знаходитись в одному із квадратів (кількість квадратів вводиться з клавіатури), 
// які розташовані лінійно (один за одним) на річці. 
// Позиція корабля визначається комп’ютером випадковим чином.
// Гра відбувається за правилами: 
// 1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то корабель потоплено;
// 2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, 
// то корабель пошкоджено (про це повідомляємо користувача).
// За два постріли спробувати потопити корабель.
// const MIN = 1
// const STANDARD_DIFFERENCE = 1
// const MIN_SQUARES = 10
// const squaresAmount = Number(
//   prompt('Please enter the amount of game field squares', `${MIN_SQUARES}`)
// )
// let shipPosition
// let userNumber
// let userNumberDifference
// let msg = ''
// if (!isFinite(squaresAmount) || squaresAmount < MIN) 
//   msg = 'Please enter a positive integer for the number of squares.'
// else {
//   shipPosition = MIN + Math.floor(Math.random() * squaresAmount)
//   userNumber = parseInt(
//     prompt(`First shot: enter a square from ${MIN} to ${squaresAmount}`)!
//   )
//   if (!isFinite(userNumber) || userNumber < MIN || userNumber > squaresAmount) 
//     msg = 'Please enter a valid square number that is a finite intager'
//   else if (userNumber === shipPosition) {
//     msg = "Congrats, you've won!"
//   } else {
//     userNumberDifference = Math.abs(shipPosition - userNumber)
//     if (userNumberDifference === STANDARD_DIFFERENCE) {
//       msg = "You've damaged the ship!"
//     } else {
//       msg = 'You missed!'
//     }
//     userNumber = Number(
//       prompt(`Last attempt: enter a square from ${MIN} to ${squaresAmount}`)
//     )
//     if (!isFinite(userNumber) || userNumber < MIN || userNumber > squaresAmount) {
//       msg = 'Please enter a valid square number that is a finite intager'
//     } else if (userNumber === shipPosition) {
//       msg = "Congrats, you've won!"
//     } else {
//       userNumberDifference = Math.abs(shipPosition - userNumber)
//       if (userNumberDifference === STANDARD_DIFFERENCE) {
//         msg = "You've damaged the ship, but have used all your attempts. Good luck next time!"
//       } else {
//         msg = "You've lost!"
//       }
//     }
//   }
// }
// document.write(`
//   <p>Ship position: ${shipPosition}</p>
//   <p>Your last number: ${userNumber}</p>
//   <p>${msg}</p>
// `)
//# sourceMappingURL=e4.js.map
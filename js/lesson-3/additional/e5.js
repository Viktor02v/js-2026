"use strict";
// Модифікувати попередню задачу з можливістю після пострілу 
// переміщення корабля у випадковим чином вибрану сусідню клітинку 
// (якщо звичайно корабель не було потоплено за першим разом).
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
//   } 
//   else {
//     userNumberDifference = Math.abs(shipPosition - userNumber)
//     if (userNumberDifference === STANDARD_DIFFERENCE) {
//       msg = "You've damaged the ship!"
//     } else {
//       msg = 'You missed!'
//     }
//       if(shipPosition === squaresAmount) 
//       shipPosition -= 1
//       else if (shipPosition === 1)
//         shipPosition += 1
//       else {
//         let direction = Math.random() < 0.5 ? -1 : 1
//         shipPosition += direction
//       }   
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
//# sourceMappingURL=e5.js.map
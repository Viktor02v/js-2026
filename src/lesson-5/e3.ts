// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях.
// Вибір у кожній позиції вибирається як одне з чотирьох зображень.
// Вивести ці зображення і повідомити виграш користувача
// (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн).
// Використати цикли і switch (для вибору зображення за номером).

// if (confirm('Почати тестування?')) {
//   const PLUM = '/public/plum.png'
//   const PEACH = '/public/peach.png'
//   const BELL = '/public/bell.png'
//   const SEVEN = '/public/seven.png'

//   const MIN = 1
//   const MAX = 4

//   const PRIZE_1 = 100
//   const PRIZE_2 = 200
//   const PRIZE_3 = 500
//   const PRIZE_4 = 1000

//   let firstNumber
//   let secondNumber
//   let thirdNumber

//   let firstSymbol = ''
//   let secondSymbol = ''
//   let thirdSymbol = ''

//   let msg = ''

//   for (let i = 1; i <= 3; i++) {
//     const randomNumber =
//       MIN + Math.floor(Math.random() * MAX)

//     let symbol = ''

//     switch (randomNumber) {
//       case 1:
//         symbol = PLUM
//         break
//       case 2:
//         symbol = PEACH
//         break
//       case 3:
//         symbol = BELL
//         break
//       case 4:
//         symbol = SEVEN
//         break
//     }

//     switch (i) {
//       case 1:
//         firstNumber = randomNumber
//         firstSymbol = symbol
//         break
//       case 2:
//         secondNumber = randomNumber
//         secondSymbol = symbol
//         break
//       case 3:
//         thirdNumber = randomNumber
//         thirdSymbol = symbol
//         break
//     }
//   }

//   if (
//     firstNumber === secondNumber &&
//     firstNumber === thirdNumber
//   ) {
//     switch (firstNumber) {
//       case 1:
//         msg = `You've won ${PRIZE_1} UAH!`
//         break
//       case 2:
//         msg = `You've won ${PRIZE_2} UAH!`
//         break
//       case 3:
//         msg = `You've won ${PRIZE_3} UAH!`
//         break
//       case 4:
//         msg = `You've won ${PRIZE_4} UAH!`
//         break
//     }
//   } else {
//     msg = "Sorry, you didn't win!"
//   }

//   document.write(`
//     <img src="${firstSymbol}" alt="First symbol">
//     <img src="${secondSymbol}" alt="Second symbol">
//     <img src="${thirdSymbol}" alt="Third symbol">
//     <p>${msg}</p>
//   `)
// }
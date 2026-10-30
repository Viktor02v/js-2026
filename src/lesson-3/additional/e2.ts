// Комп’ютер випадковим чином вибирає початок і кінець проміжку 
// (проміжок повинен знаходитися в межах від 1 до 100). 
// Користувач вводить число і виграє, 
// якщо число знаходиться у цьому проміжку, 
// або розташоване від нього (від лівого або правого краю) не більше ніж на 10.

// const MIN = 1
// const MAX = 100
// const STANDARD_DIFFERENCE = 10

// let intervalStart = 0
// let intervalEnd = 0
// let msg = ''
// let isWin = false

// const firstRandom = MIN + Math.floor(Math.random() * MAX)
// const secondRandom = MIN + Math.floor(Math.random() * MAX)

// const userNumber = Number(prompt('Enter your number (1-100)'))
// const userInteger = Math.floor(userNumber)

// if (userInteger < MIN || userInteger > MAX) {
//   msg = 'Please enter an integer between 1 and 100.'
// } else if (firstRandom === secondRandom) {
//   msg = 'The randomly generated numbers are the same. Please reload the page.'
// } else {
//   if (firstRandom > secondRandom) {
//     intervalStart = secondRandom
//     intervalEnd = firstRandom
//   } else {
//     intervalStart = firstRandom
//     intervalEnd = secondRandom
//   }

//   const isWithin = userInteger >= intervalStart && userInteger <= intervalEnd

//   const isNearStart =
//     Math.abs(userInteger - intervalStart) <= STANDARD_DIFFERENCE

//   const isNearEnd =
//     Math.abs(userInteger - intervalEnd) <= STANDARD_DIFFERENCE

//   if (isWithin || isNearStart || isNearEnd) {
//     isWin = true
//     msg = "Congrats, you've won!"
//   } else {
//     msg = "Sorry, you've lost. Try again!"
//   }
// }

// document.write(`
//   <p>Interval Start: ${intervalStart}</p>
//   <p>Interval End: ${intervalEnd}</p>
//   <p>Your number: ${userInteger}</p>
//   <p>${msg}</p>
// `)
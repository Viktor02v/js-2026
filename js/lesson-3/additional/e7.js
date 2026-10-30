"use strict";
// Гра в кості. Правила гри:
// 1) користувач може кинути кості не більше двох разів (користувач сам вирішує чи робити, 
// чи не робити другий кидок);
// 2) якщо випадає парне число, то кількість балів збільшується на це число;
// 3) якщо випадає непарне число, то кількість балів зменшується на це число;
// 4) виграє той, у кого кількість балів більша.
// const MIN = 1
// const MAX = 6
// let fitstPlayerScore 
// let secondPlayerScore
// let msg = ''
// if(confirm('Are you ready to start the game ?')){
//   fitstPlayerScore = MIN + Math.floor(Math.random() * MAX)
//   secondPlayerScore = MIN + Math.floor(Math.random() * MAX)
//   if(confirm(`Player One, your score is ${fitstPlayerScore}, would you like to make a second throw?`)){
//     let firstPlayerSecondThrow = MIN + Math.floor(Math.random() * MAX)
//     if(firstPlayerSecondThrow%2 === 0) {
//       fitstPlayerScore += firstPlayerSecondThrow
//     } 
//     else fitstPlayerScore -= firstPlayerSecondThrow
//   } 
//   if (confirm(`Second Player, your score is ${secondPlayerScore}, would you like to make a second throw?, First player score is ${fitstPlayerScore} `)){
//     let secondPlayerSecondThrow = MIN + Math.floor(Math.random() * MAX)
//     if(secondPlayerSecondThrow%2 === 0) {
//       secondPlayerScore += secondPlayerSecondThrow
//     } 
//     else secondPlayerScore -= secondPlayerSecondThrow
//   } 
//   if(fitstPlayerScore === secondPlayerScore) msg = 'Draw!'
//   else if (fitstPlayerScore > secondPlayerScore) msg = 'First player wins'
//   else msg = 'Second player wins' 
// }
// else msg = 'Reload the page to re-confirm'
// document.write(`
//   <p>First Player Score ${fitstPlayerScore}</p>
//   <p>Second Player Score ${secondPlayerScore}</p>
//   <p>${msg}</p>
// `)
//# sourceMappingURL=e7.js.map
// Задача 12.
// З клавіатури вводиться кількість монет номіналом 2 копійки (5коп, 25коп, 50 коп).
// Визначити скільки гривень і копійок є у даній сумі.
const CREDIT = 100
const FIRST_COIN = 2
const SECOND_COIN = 5
const THIRD_COIN = 25
const FORTH_COIN = 50

const firstCoinQuantity = parseInt(prompt('Enter the quantity of coins (2коп)','1'))
const secondCoinQuantity = parseInt(prompt('Enter the quantity of coins (5коп)','1'))
const thirdCoinQuantity = parseInt(prompt('Enter the quantity of coins (25коп)','1'))
const forthCoinQuantity = parseInt(prompt('Enter the quantity of coins (50коп)','1'))

const totalCoins = firstCoinQuantity * FIRST_COIN + secondCoinQuantity * SECOND_COIN
 + thirdCoinQuantity * THIRD_COIN + forthCoinQuantity * FORTH_COIN

const totalCredits = Math.floor(totalCoins / CREDIT )
const leftoverCoins = totalCoins % CREDIT

document.write(`
  <p>Total Coins Sum : ${totalCoins}</p>
  <p>Total Credits : ${totalCredits}</p>
  <p>Leftover Coins : ${leftoverCoins}</p>
  `)
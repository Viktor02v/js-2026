// З клавіатури вводиться кількість монет номіналом 1 копійка.
// Визначити скільки гривень і копійок є у даній сумі . 
// Наприклад, дано 245 копійок, а вивести 2 грн 45 копійок.
const CREDIT_IN_COINS = 100
const coins = parseInt(prompt('Please enter the amount of coins', '100'))
const wholeCredits = Math.floor(coins / CREDIT_IN_COINS)
const leftoverCoins = coins % CREDIT_IN_COINS

document.write(`
  <p>Coins entered : ${coins}</p>
  <p>Credits converted : ${wholeCredits}</p>
  <p>Leftover in coins : ${leftoverCoins}</p>
  `)
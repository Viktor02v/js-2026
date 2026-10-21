// З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини,
// у якої кількість цукерок є більшою, або вивести, 
// що кількість однакова.

const firstChildName = prompt('Enter first child name')
const secondChildName = prompt('Enter second child name')

const firstChildCandiesAmount = parseInt(prompt('Enter the amount of candies for the first child', '1')!)
const secondChildCandiesAmount = parseInt(prompt('Enter the amount of candies for the second child', '2')!)

const isFirstChildWon = firstChildCandiesAmount > secondChildCandiesAmount
const isDraw = firstChildCandiesAmount === secondChildCandiesAmount

if(firstChildCandiesAmount < 0 || secondChildCandiesAmount < 0) throw new Error('Entered amount of candies is wrong, please enter the correct amount of candies that is more or equals "0"')
else if (isFirstChildWon) document.write(`${firstChildName} has more candies !`)
else if (!isFirstChildWon && isDraw) document.write(`Draw, both childs have same amount of candies`)
else document.write(`${secondChildName} has more candies !`)

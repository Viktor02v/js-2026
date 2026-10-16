// Задача 13. Визначити скільки повних тижнів є у вказаній кількості днів.
const DAYS_IN_WEEK = 7
const days = parseInt(prompt('Enter the amount of days','7'))

const wholeWeeks = Math.floor(days / DAYS_IN_WEEK)

document.write(`
  <p>Whole weeks in ${days} = ${wholeWeeks}</p>
`)
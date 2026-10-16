// З клавіатури вводиться кількість місяців, які пройшли від деякого моменту часу. 
// Вивести повну кількість років і місяців. 
// Наприклад, дано 28 місяців, а вивести 2 роки і 4 місяці.
const MONTS_IN_YEAR = 12

const months = parseInt(prompt('Enther the amount of months', '10'))
const wholeYears = Math.floor( months / MONTS_IN_YEAR)
const leftoverMonths = months % MONTS_IN_YEAR

document.write(`
  <p>
  Typed amount of months : ${months}
  </p>
  <p>
  Whole Years : ${wholeYears}
  </p>
  <p>
  Leftover months : ${leftoverMonths}
  </p>
  `)

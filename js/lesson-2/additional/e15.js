// З клавіатури вводиться номер місяця.
// Визначити, який буде місяць через вказану кількість N місяців.
const MONTHS_IN_YEAR = 12

const monthNumber = parseInt(prompt('Enter the month number','10'))
const generatedMonth = Math.floor(Math.random() * 100)
const leftoverMonth =  generatedMonth % MONTHS_IN_YEAR
const calculatedMonth = (leftoverMonth + (monthNumber - 1)) % MONTHS_IN_YEAR + 1

document.write(`
  <p>
  Typed month number : ${monthNumber}
  </p>
  <p>
  Random month : ${generatedMonth}
  </p>
  <p>
  Leftover month : ${leftoverMonth}
  </p>
  <p>
  Calculated Day : ${calculatedMonth}
  </p>
  `)

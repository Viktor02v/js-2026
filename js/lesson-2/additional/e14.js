// З клавіатури вводиться номер дня тижня (від 1 до 7).
// Визначити який буде день тижня через N днів.
const DAYS_IN_WEEK = 7

const dayNumber = parseInt(prompt('Enter the number of the days (from 1-7)', '4'))
const generatedDaysNumber = Math.floor(Math.random() * 100)
const leftoverDays =   generatedDaysNumber % DAYS_IN_WEEK
const calculatedDay = (leftoverDays + (dayNumber - 1)) % DAYS_IN_WEEK + 1


document.write(`
  <p>
  Typed day number : ${dayNumber}
  </p>
  <p>
  Random Day : ${generatedDaysNumber}
  </p>
  <p>
  Leftover Days : ${leftoverDays}
  </p>
  <p>
  Calculated Day : ${calculatedDay}
  </p>
  `)
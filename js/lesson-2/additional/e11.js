// Дано поточну кількість годи, хвилин, секунд (як на годиннику). Визначити :
// 1) яка кількість секунд буде на годиннику через N секунд.
// 2) яка кількість хвилин буде на годиннику через N секунд, X хвилин.
const MIN_GENERATED_NUMBER = 0
const SECONDS_IN_MINUTE = 60
const MINUTES_IN_HOUR = 60
const SECONDS_IN_HOUR = MINUTES_IN_HOUR * 60
const HOURS_IN_DAY = 24

const initialSeconds = parseInt(prompt('Enter the initial amount of seconds (0 - 59)', '59'))
const initialMinutes = parseInt(prompt('Enter the initial amount of minutes (0 - 59)', '59'))
const initialHours = parseInt(prompt('Enter the start amount of hours (0 - 24) ', '24'))

const initialTime = `${initialHours}:${initialMinutes}:${initialSeconds}`

const generatedSeconds = Math.floor(Math.random() * ((SECONDS_IN_MINUTE -1) - MIN_GENERATED_NUMBER )+ 1) + MIN_GENERATED_NUMBER
const generatedMinutes = Math.floor(Math.random() * ((MINUTES_IN_HOUR -1) - MIN_GENERATED_NUMBER ) + 1) + MIN_GENERATED_NUMBER

const summedSeconds = initialSeconds + generatedSeconds
const wholeMinutes = Math.floor(summedSeconds / SECONDS_IN_MINUTE) 
const summedMinutes = initialMinutes + generatedMinutes + wholeMinutes
const secondsLeftover = summedSeconds % SECONDS_IN_MINUTE
const minutesLeftover = (summedMinutes % SECONDS_IN_MINUTE)
const wholeHours = Math.floor(summedMinutes / MINUTES_IN_HOUR)

const newTime = `${initialHours + wholeHours}:${minutesLeftover}:${secondsLeftover}`

document.write(`
  <p>Initial time : ${initialTime}</p>
  <p>Generated N number of seconds : ${generatedSeconds}</p>
  <p>Generated X number of minutes : ${generatedMinutes}</p>
  <p>Seconds form user + generated seconds : ${summedSeconds}</p>
  <p>Seconds leftover that is taken after deviding by the minute (60sec): ${secondsLeftover}</p>
  <p>Minutes from user + generated minutes: ${summedMinutes}</p>
  <p>Whole minute(s) taken out of summedSeconds : ${wholeMinutes}</p>
  <p>Minutes leftover that is talen afte the deviding by the minute (60sec): ${minutesLeftover}</p>
  <p>Whole hours : ${wholeHours}</p>
  <p>New time : ${newTime}</p> 
  `)
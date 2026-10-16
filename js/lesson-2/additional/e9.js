// Скласти програму для розв’язування задачі:
// йде N-а секунда доби,
// визначити скільки повних годин і повних хвилин пройшло до цього моменту.
const BOTTOM_NUMBER = 0
const MINUTE_IN_SECONDS = 60
const HOUR_IN_SECONDS =  60 * 60
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24

const second = Math.floor((Math.random() * ((DAY_IN_SECONDS - 1) - BOTTOM_NUMBER + 1)) + BOTTOM_NUMBER)
const minutesPast = Math.floor(second / MINUTE_IN_SECONDS)
const hoursPast = Math.floor(second / HOUR_IN_SECONDS)
document.write(`
  <p>Seconds since the day start : ${second}</p>
  <p>Minutes since the day start : ${minutesPast}</p>
  <p>Hours since the day start : ${hoursPast}</p>
  `)
// Розробити програму (не використовувати if),
// яка за номером року Y визначає номер століття C
// (врахувати, що початком XX століття був 1901, а не 1900 рік). 
const CENTURY_IN_YEARS = 100
const year = parseInt(prompt('Enter the year','2004'))
const centuryFromYear = Math.ceil(year / CENTURY_IN_YEARS)

document.write(`
  <p>Year : ${year}</p>
  <p>Number of century : ${centuryFromYear}</p>
  `)
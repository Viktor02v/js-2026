// Дано покази температур (довільна кількість). 
// Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

{
if(confirm('Start testing ?')){
function generateRandomNumber(min:number, max:number){
  return min + Math.floor(Math.random() * (max - min + 1))
}

function getAverage(sum: number, divider:number){
  return sum / divider
}

function countPositveAverage(temperatureReadingsNumber:number){
  let totalPositive = 0
  for (let i = 0; i < temperatureReadingsNumber; i++){
    const randomNumber = generateRandomNumber(0, 40)
    totalPositive += randomNumber
  }
  return getAverage(totalPositive, temperatureReadingsNumber)
}

const temperatureReadings = generateRandomNumber(1,10)
const positiveAverage = countPositveAverage(temperatureReadings)

document.write(`
  <p>${positiveAverage}</p>
`)
}
}
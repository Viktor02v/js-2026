// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
{
if(confirm('Start testing ?')){

function getDayStatus(dayNumber:number) {
  if (dayNumber % 6 === 0 || dayNumber % 7 === 0) return "It's a weekend"
  else return "It's a work day"
}

const dayNumber = parseInt(prompt('Enter day number (1-7)')!)
let dayStatus = getDayStatus(dayNumber)

document.write(`
  <p>${dayStatus}</p>
`)
}
}
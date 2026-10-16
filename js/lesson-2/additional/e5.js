//  Задача 4. Визначити, яку платню одержить на фірмі сумісник за виконану роботу,
//  якщо йому нараховано S грн., а податок становить 20%.

const salary = Number(prompt('Enter the salary amount','35000'))
const TAX = salary * 0.20
const salaryAfterTax = salary - TAX

document.write(`
  <p>Salary : ${salary}</p>
  <p>Tax is : ${TAX}</p>
  <p>Salary after tax is : ${salaryAfterTax}</p>
  `)
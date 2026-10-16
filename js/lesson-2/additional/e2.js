// Задача 2. З клавіатури вводиться розмір заробітної плати та розмір прожиткового мінімуму. <br>
// Визначити розмір соціальної допомоги (ввжаємо, що заробітна плата є меншою).
// довільне значення зарплатні (для прикладу повинно бути меньше за livingWage) : const salary
// довільне значення прожиткового мінімуму (для прикладу повинно бути більше за salary ) : const livingWage
// обчислена соціальна допомога : const socialHelp
// функція із використанням умови if, для того щоб упевнитися у послідовності умови задачі : function sumUp()

const salary = Number(prompt('Please enter the amount of salary', '8000'))
const livingWage = Number(prompt('Please enter the amount of living wage (has to be more then the amount of salary)', '12000'))

function sumUp( salary, livingWage) {
  if(salary > livingWage) return 'Salary has to be less then the living wage'
  return livingWage - salary
}
const socialHelp = sumUp(salary, livingWage)

  document.write(`
    <p>Salary = ${salary}</p>
    <p>Living Wage = ${livingWage}</p>
    <p>Social Help = ${socialHelp}</p>
    `)
"use strict";
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: 
// кількість парних, 
// кількість додатних, 
// кількість більших за 100.
{
    if (confirm('Start testing ?')) {
        function isNumberEven(num) {
            return num % 2 === 0;
        }
        function isNumberPositive(num) {
            return num >= 0;
        }
        function isNumberMoreHundred(num) {
            return num > 100;
        }
        function getResult(num1, num2, num3) {
            let evenAmount = 0;
            let positiveAmount = 0;
            let moreHundred = 0;
            if (isNumberEven(num1))
                evenAmount++;
            if (isNumberEven(num2))
                evenAmount++;
            if (isNumberEven(num3))
                evenAmount++;
            if (isNumberPositive(num1))
                positiveAmount++;
            if (isNumberPositive(num2))
                positiveAmount++;
            if (isNumberPositive(num3))
                positiveAmount++;
            if (isNumberMoreHundred(num1))
                moreHundred++;
            if (isNumberMoreHundred(num2))
                moreHundred++;
            if (isNumberMoreHundred(num3))
                moreHundred++;
            return `Even amount: ${evenAmount}, odd amount: ${positiveAmount}, more hundred : ${moreHundred}`;
        }
        let result = getResult(-1, 2, 101);
        document.write(`
  ${result}
  `);
    }
}
//# sourceMappingURL=e5.js.map
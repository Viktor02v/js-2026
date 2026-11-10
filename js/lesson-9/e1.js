"use strict";
// Користувач вводить кількість елементів.
// Створити масив, що складається з вказаної кількості елементів заповнених нулями.
{
    if (confirm('Start testing ?')) {
        let userNumber = parseInt(prompt('Please enter the amount of the array elements you want to generate'));
        const userArray = new Array(userNumber).fill(0);
        document.write(`
      <p>Your array : ${userArray}</p>
      `);
    }
}
//# sourceMappingURL=e1.js.map
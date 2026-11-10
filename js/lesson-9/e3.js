"use strict";
// Користувач вводить кількість елементів.
// Створити масив, у якому перші 5 елементів заповнені 1-цями,
// а інші до кінця масиву заповнені 7-ками.
{
    if (confirm('Start testing ?')) {
        let userNumber = parseInt(prompt('Please enter the amount of the array elements you want to generate'));
        const userArray = new Array(userNumber).fill(1);
        userArray.fill(7, 5);
        document.write(`
      <p>Your array : ${userArray}</p>
      `);
    }
}
//# sourceMappingURL=e3.js.map
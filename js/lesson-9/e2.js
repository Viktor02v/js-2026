"use strict";
// Користувач вводить кількість елементів.
// Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
{
    if (confirm('Start testing ?')) {
        let userNumber = parseInt(prompt('Please enter the amount of the array elements you want to generate'));
        const firstHalfIndexEnd = Math.floor(userNumber / 2);
        const userArray = new Array(userNumber).fill(1);
        userArray.fill(7, firstHalfIndexEnd);
        document.write(`
      <p>Your array : ${userArray}</p>
      `);
    }
}
//# sourceMappingURL=e2.js.map
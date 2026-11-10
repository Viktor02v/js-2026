"use strict";
// Дано масив цін у грн.
// Податок складає 20%.
// Сформувати масив, який буде містити величину сплаченого податку у грн.
{
    if (confirm('Start testing ?')) {
        const MIN = 100;
        const MAX = 2000;
        const userArrLength = parseInt(prompt('Please enter the amount of prices you want to be in your array'));
        const userArray = new Array(userArrLength);
        function generateNumber(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }
        function fillArrWithUserValues(arr, min, max) {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = generateNumber(min, max);
            }
        }
        fillArrWithUserValues(userArray, MIN, MAX);
        const taxAmounts = userArray.map((element) => {
            const tax = element * 0.2;
            return tax;
        });
        document.write(`
      <p>Original arr : ${userArray.join(' , ')}</p>
      <p>Tax amounts  : ${taxAmounts.join(' , ')}</p>
      `);
    }
}
//# sourceMappingURL=e10.js.map
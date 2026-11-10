"use strict";
// Дано масив елементів. Знайти добуток додатних елементів
{
    if (confirm('Start testing ?')) {
        const userArrLength = parseInt(prompt('Please enter the amount of elements you want to be in your array'));
        const userArray = new Array(userArrLength);
        function fillArrWithUserValues(arr) {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = parseInt(prompt(`Please enter the number for position: ${i + 1}`));
            }
        }
        fillArrWithUserValues(userArray);
        function findProduct(arr) {
            let totalPositiveProduct = 1;
            for (const element of arr) {
                if (element > 0) {
                    totalPositiveProduct *= element;
                }
            }
            return totalPositiveProduct;
        }
        const totalPositiveProduct = findProduct(userArray);
        document.write(`
      <p>user Array : ${userArray.join(' , ')}</p>
      <p>Total Positive Product : ${totalPositiveProduct}</p>
      `);
    }
}
//# sourceMappingURL=e5.js.map
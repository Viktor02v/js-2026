"use strict";
// Дано масив цін. Змінити цей масив так, що на ціни товарів,
// які більші за 1000 грн. дати 30% знижки.
{
    if (confirm('Start testing ?')) {
        const SALE_FROM = 1000;
        const userArrLength = parseInt(prompt('Please enter the amount of elements you want to be in your array'));
        const userArray = new Array(userArrLength);
        function fillArrWithUserValues(arr) {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = parseInt(prompt(`Please enter the number for position: ${i + 1}`));
            }
        }
        fillArrWithUserValues(userArray);
        let arrWithSales = userArray.map((element) => {
            if (element > SALE_FROM) {
                return element - element * 0.3;
            }
            else {
                return element;
            }
        });
        document.write(`
      <p>Original arr : ${userArray.join(' , ')}</p>
      <p>Elements that are bigger then the first element are multiplied by 2  : ${arrWithSales.join(' , ')}</p>
      `);
    }
}
//# sourceMappingURL=e7.js.map
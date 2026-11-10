"use strict";
// Дано масив елементів.
// Усі елементи, які більші за перший елемент помножити на 2
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
        let multipliedArr = userArray.map((element) => {
            if (element > userArray[0]) {
                return element * 2;
            }
            else {
                return element;
            }
        });
        document.write(`
      <p>Original arr : ${userArray.join(' , ')}</p>
      <p>Elements that are bigger then the first element are multiplied by 2  : ${multipliedArr.join(' , ')}</p>
      `);
    }
}
//# sourceMappingURL=e6.js.map
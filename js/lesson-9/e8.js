"use strict";
//Дано масив номерів авто.
// Сформувати новий масив тих, які починаються на «А»
{
    if (confirm('Start testing ?')) {
        const START_LETTER = 'A';
        const userArrLength = parseInt(prompt('Please enter the amount of elements you want to be in your array'));
        const userArray = new Array(userArrLength);
        function fillArrWithUserValues(arr) {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = prompt(`Please enter the vehicle number for position: ${i + 1}`).toUpperCase();
            }
        }
        fillArrWithUserValues(userArray);
        const vehicleNumbersWithA = userArray.filter((element) => {
            let el = element.toLowerCase();
            let startLetterToLowerCase = START_LETTER.toLowerCase();
            if (el[0] === startLetterToLowerCase) {
                return element;
            }
        });
        document.write(`
      <p>Original arr : ${userArray.join(' , ')}</p>
      <p>Vehicle numbers that start with letter "A"  : ${vehicleNumbersWithA.join(' , ')}</p>
      `);
    }
}
//# sourceMappingURL=e8.js.map
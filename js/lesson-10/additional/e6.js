"use strict";
// Сформувати спадний масив із чисел, що діляться на 3.
{
    const arrLength = parseInt(prompt('Please enter the number that gonna represent the length of the array'));
    const arr = Array.from({ length: arrLength }, (_, index) => 3 * arrLength + 3 - (3 * index + 3));
    document.write(`
    <p>${arr}</p>
    `);
}
//# sourceMappingURL=e6.js.map
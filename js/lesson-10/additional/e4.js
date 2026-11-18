"use strict";
// Сформувати масив з елементів арифметичної
// прогресії зі заданим першим елементом $x$ і різницею $d$.
{
    const arrLength = parseInt(prompt('Please enter the number that gonna represent the length of the array'));
    const startNumber = parseInt(prompt('Please enter the start number point'));
    const differenceNumber = parseInt(prompt('Please enter the difference number'));
    const arr = Array.from({ length: arrLength }, (_, index) => {
        return startNumber + index * differenceNumber;
    });
    document.write(`
    <p>${arr}</p>
    `);
}
//# sourceMappingURL=e4.js.map
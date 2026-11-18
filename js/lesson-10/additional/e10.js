"use strict";
// Створити масив, що складається з трійок однакових елементів, які йдуть підряд.
{
    const arrLength = parseInt(prompt('Please enter the number that gonna represent the length of the array'));
    const arr = Array.from({ length: arrLength }, (_, index) => {
        const groups = Math.floor(arrLength / 3);
        return Math.floor(index / groups) + 1;
    });
    document.write(`
    <p>${arr}</p>
    `);
}
//# sourceMappingURL=e10.js.map
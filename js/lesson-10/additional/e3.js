"use strict";
// Заповнити масив послідовними непарними числами, починаючи з одиниці.
{
    const arrLength = parseInt(prompt('Please enter the number that gonna represent the length of the array'));
    const arr = Array.from({ length: arrLength }, (_, index) => {
        return 2 * index + 1;
    });
    document.write(`
    <p>${arr}</p>
    `);
}
//# sourceMappingURL=e3.js.map
"use strict";
// Створити масив, який однаково читається як зліва направо,
// так і справа наліво.
{
    const arrLength = 10;
    const arr = Array.from({ length: arrLength }, (_, index) => {
        const middle = Math.floor(arrLength / 2);
        return middle - Math.abs(index - middle) + 1;
    });
    document.write(`
    <p>${arr}</p>
    `);
}
//# sourceMappingURL=e11.js.map
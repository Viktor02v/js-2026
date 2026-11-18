"use strict";
// Сформувати масив із випадкових цілих чисел від 0 до 9,
// у якому одиниць від 3 до 5 і двійок більше за трійки.
{
    const arrLength = 10;
    function getRandomNumber(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    const oneIndexes = [];
    const oneLimit = getRandomNumber(3, 5);
    while (oneIndexes.length !== oneLimit) {
        const randomIndexNumber = getRandomNumber(0, arrLength - 1);
        if (oneIndexes.includes(randomIndexNumber))
            continue;
        oneIndexes.push(randomIndexNumber);
    }
    const arr = Array.from({ length: arrLength }, (el, index) => {
        const randomNumber = getRandomNumber(2, arrLength - 1);
        if (oneIndexes.includes(index))
            return 1;
        else
            return randomNumber;
    });
    document.write(`
    <p>${arr}</p>
    `);
}
//# sourceMappingURL=e14.js.map
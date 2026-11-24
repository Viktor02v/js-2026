"use strict";
// Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
// Заповнити його випадковим чином.
// Підрахувати для кожного рядка кількість неділь.
{
    // if (confirm('Start testing ?')) {
    let Day;
    (function (Day) {
        Day[Day["MONDAY"] = 0] = "MONDAY";
        Day[Day["TUESDAY"] = 1] = "TUESDAY";
        Day[Day["WEDNESDAY"] = 2] = "WEDNESDAY";
        Day[Day["THURSDAY"] = 3] = "THURSDAY";
        Day[Day["FRIDAY"] = 4] = "FRIDAY";
        Day[Day["SATURDAY"] = 5] = "SATURDAY";
        Day[Day["SUNDAY"] = 6] = "SUNDAY";
    })(Day || (Day = {}));
    const ROWS = 4;
    const COLS = 8;
    function getRandomDay(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    // Filling matrix arr with random day numbers
    function fillRowsWithCols(colsNumber, generateNumber) {
        return Array.from({ length: colsNumber }, () => generateNumber());
    }
    // Generating matrix
    function generateMatrix(rowsNumber, colsNumber, min, max) {
        return Array.from({ length: rowsNumber }, () => fillRowsWithCols(colsNumber, () => getRandomDay(min, max)));
    }
    const arr = generateMatrix(ROWS, COLS, Day.MONDAY, Day.SUNDAY);
    arr.forEach((el, rowIndex) => {
        let sundayCount = 0;
        let rowNumber = rowIndex + 1;
        el.forEach((el) => {
            if (el === Day.SUNDAY)
                sundayCount++;
        });
        document.write(`
        Row: ${rowNumber}, sunday number count: ${sundayCount} <br>
        `);
    });
    console.log(arr);
    // }
}
//# sourceMappingURL=e7.js.map
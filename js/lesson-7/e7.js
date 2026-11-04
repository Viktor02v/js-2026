"use strict";
// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців 
// (таблиця заповнюється заданим фіксованим повідомленням).
{
    if (confirm('Start testing ?')) {
        function getDashboard(rows, cols) {
            document.write(`<table>`);
            for (let r = 1; r <= rows; r++) {
                document.write(`<tr>`);
                for (let c = 1; c <= cols; c++) {
                    document.write(`<td>Row: ${r} Column ${c}</td>`);
                }
                document.write(`</tr>`);
            }
            document.write(`</table>`);
        }
        let colAmount = parseInt(prompt('Enter the amount of cols'));
        let rowsAmount = parseInt(prompt('Enter the amount of rows'));
        getDashboard(rowsAmount, colAmount);
    }
}
//# sourceMappingURL=e7.js.map
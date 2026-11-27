"use strict";
//  Розробити функцію, у яку передають об’єкт (день, місяць, рік).
// Визначити, який буде рік через N місяців.
{
    if (confirm('Start testing ?')) {
        const dateObj = { day: 2, month: 24, year: 2018 };
        function getYear(dateObj) {
            let MONTHS_IN_YEAR = 12;
            let yearsFromMonths = Math.floor(dateObj.month / MONTHS_IN_YEAR);
            return dateObj.year + yearsFromMonths;
        }
        document.write(`Year : ${getYear(dateObj)}`);
    }
}
//# sourceMappingURL=e2.js.map
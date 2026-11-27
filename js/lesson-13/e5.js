"use strict";
// З використанням замикань розробити ітератор, тобто функцію,
// що буде поступово за окремими викликами видавати по одне
// значення від заданого мінімального до заданого максимального.
// Якщо значення досягне максимального, то наступним буде мінімальне значення.
// З використанням цієї функції реалізувати перебір номерів місяців.
{
    if (confirm('Start testing ?')) {
        const MIN = 1;
        const MAX = 12;
        let Months;
        (function (Months) {
            Months[Months["January"] = 1] = "January";
            Months[Months["February"] = 2] = "February";
            Months[Months["March"] = 3] = "March";
            Months[Months["April"] = 4] = "April";
            Months[Months["May"] = 5] = "May";
            Months[Months["June"] = 6] = "June";
            Months[Months["July"] = 7] = "July";
            Months[Months["August"] = 8] = "August";
            Months[Months["September"] = 9] = "September";
            Months[Months["October"] = 10] = "October";
            Months[Months["November"] = 11] = "November";
            Months[Months["December"] = 12] = "December";
        })(Months || (Months = {}));
        function iterator(min, max) {
            let current = min;
            function nextMonth() {
                if (current === max) {
                    let temp = current;
                    current = min;
                    return document.write(`${temp} ${Months[temp]} <br>`);
                }
                else {
                    let temp = current;
                    current++;
                    return document.write(`${temp} ${Months[temp]} <br>`);
                }
            }
            return { nextMonth };
        }
        const { nextMonth } = iterator(MIN, MAX);
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
        nextMonth();
    }
}
//# sourceMappingURL=e5.js.map
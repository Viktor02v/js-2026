"use strict";
// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була максимальною;
// номери днів, коли кількість відвідувачів була мінімальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
{
    if (confirm('Start testing ?')) {
        const MIN = 1;
        const MAX = 100;
        const WEEK_IN_DAYS = 7;
        const WEEKDAYS_END = 5;
        const WEEKENDS_END = 7;
        function getMinVisitors(visitors) {
            let min = visitors[0];
            for (let i = 1; i < visitors.length; i++) {
                if (min > visitors[i])
                    min = visitors[i];
            }
            return min;
        }
        function getMaxVisitors(visitors) {
            let max = visitors[0];
            for (let i = 1; i < visitors.length; i++) {
                if (max < visitors[i])
                    max = visitors[i];
            }
            return max;
        }
        function getAttendanceDays(minVisitorsNumber, maxVisitorsNumber, visitors) {
            let daysBelowTwenty = [];
            let minVisitorDays = [];
            let maxVisitorDays = [];
            for (let i = 0; i < visitors.length; i++) {
                if (visitors[i] < 20)
                    daysBelowTwenty.push(i + 1);
                if (visitors[i] === minVisitorsNumber)
                    minVisitorDays.push(i + 1);
                if (visitors[i] === maxVisitorsNumber)
                    maxVisitorDays.push(i + 1);
            }
            return {
                daysBelowTwenty,
                minVisitorDays,
                maxVisitorDays,
            };
        }
        function getWeekdayTotalVisitors(visitors) {
            let total = 0;
            for (let i = 0; i < WEEKDAYS_END; i++) {
                total += visitors[i];
            }
            return total;
        }
        function getWeekendTotalVisitors(visitors) {
            let total = 0;
            for (let i = WEEKDAYS_END; i < WEEKENDS_END; i++) {
                total += visitors[i];
            }
            return total;
        }
        function getShopReport(period, minNumber, maxNumber) {
            let visitors = new Array(period);
            for (let i = 0; i < period; i++) {
                visitors[i] =
                    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
            }
            const minAttendance = getMinVisitors(visitors);
            const maxAttendance = getMaxVisitors(visitors);
            const attendanceDays = getAttendanceDays(minAttendance, maxAttendance, visitors);
            const weekdaysTotal = getWeekdayTotalVisitors(visitors);
            const weekendsTotal = getWeekendTotalVisitors(visitors);
            return {
                visitors,
                weekdaysTotal,
                weekendsTotal,
                attendanceDays,
            };
        }
        const { visitors, attendanceDays, weekdaysTotal, weekendsTotal } = getShopReport(WEEK_IN_DAYS, MIN, MAX);
        document.write(`
    <p>Visitors for week : ${visitors}</p>
    <p>Days with less then 20 visitors : ${attendanceDays.daysBelowTwenty}</p>
    <p>Days with minimum amount of visitors : ${attendanceDays.minVisitorDays}</p>
    <p>Days with max amount of  visitors : ${attendanceDays.maxVisitorDays}</p>
    <p>Total amount of visitors for the weekdays : ${weekdaysTotal}</p>
    <p>Total amount of visitors for the weekend : ${weekendsTotal}</p>
    `);
    }
}
//# sourceMappingURL=e2.js.map
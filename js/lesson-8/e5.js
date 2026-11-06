"use strict";
// Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.
{
    if (confirm('Start testing ?')) {
        const MIN_GRADE = 2;
        const MAX_GRADE = 5;
        const MIN_AMOUNT = 5;
        const MAX_AMOUNT = 15;
        const F_GRADE = 2;
        const GOOD_GRADE = 4;
        function generateRandomNumber(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }
        function getAverage(grades) {
            let totalGradesSum = 0;
            for (let i = 0; i < grades.length; i++) {
                totalGradesSum += grades[i];
            }
            return totalGradesSum / grades.length;
        }
        function getGradeStats(grades, averageGrade, fGrade, goodGrade) {
            let fGradesCount = 0;
            let goodGradesCount = 0;
            let belowAverageCount = 0;
            for (let i = 0; i < grades.length; i++) {
                if (grades[i] === fGrade)
                    fGradesCount++;
                if (grades[i] >= goodGrade)
                    goodGradesCount++;
                if (grades[i] < averageGrade)
                    belowAverageCount++;
            }
            return {
                fGradesCount,
                goodGradesCount,
                belowAverageCount,
            };
        }
        function getGradesReport(minAmount, maxAmount, minGrade, maxGrade, fGrade, goodGrade) {
            const gradesAmount = generateRandomNumber(minAmount, maxAmount);
            const gradesArr = new Array(gradesAmount);
            for (let i = 0; i < gradesAmount; i++) {
                gradesArr[i] = generateRandomNumber(minGrade, maxGrade);
            }
            const averageGrade = getAverage(gradesArr);
            const gradeStats = getGradeStats(gradesArr, averageGrade, fGrade, goodGrade);
            return { gradesArr, averageGrade, gradeStats };
        }
        const { gradesArr: grades, averageGrade, gradeStats, } = getGradesReport(MIN_AMOUNT, MAX_AMOUNT, MIN_GRADE, MAX_GRADE, F_GRADE, GOOD_GRADE);
        document.write(`
    <p>Grades : ${grades.join(', ')}</p>
    <p>Average Grade : ${averageGrade}</p>
    <p>F Grade count : ${gradeStats.fGradesCount}</p>
    <p>Good Grade count : ${gradeStats.goodGradesCount}</p>
    <p>Below average grade count : ${gradeStats.belowAverageCount}</p>
    `);
    }
}
//# sourceMappingURL=e5.js.map
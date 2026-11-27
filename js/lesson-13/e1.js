"use strict";
// Задача 1. Генерація всіх підмножин: Реалізуйте рекурсивну функцію,
// яка генерує всі можливі підмножини заданого масиву.
// Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
{
    if (confirm('Start testing ?')) {
        const arr = [1, 2, 3];
        const allSubsets = [];
        function getSubsets(combination, index, arr) {
            if (index === arr.length) {
                allSubsets.push([...combination]);
                return;
            }
            combination.push(arr[index]);
            getSubsets(combination, index + 1, arr);
            combination.pop();
            getSubsets(combination, index + 1, arr);
        }
        getSubsets([], 0, arr);
        console.log(allSubsets);
    }
}
//# sourceMappingURL=e1.js.map
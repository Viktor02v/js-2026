"use strict";
//  Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів під час сортування бульбашкою
{
    if (confirm('Start testing ?')) {
        const MIN = -100;
        const MAX = 200;
        function generateNumber(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }
        const randomSums = Array.from({ length: 30 }, () => generateNumber(MIN, MAX));
        function bubbleSort(arr) {
            let changed = true;
            let changeCount = 0;
            do {
                changed = false;
                for (let c = 1; c < arr.length; c++) {
                    if (arr[c] < arr[c - 1]) {
                        const temp = arr[c - 1];
                        arr[c - 1] = arr[c];
                        arr[c] = temp;
                        changed = true;
                        changeCount++;
                    }
                }
            } while (changed);
            console.log(randomSums);
            return changeCount;
        }
        console.log(bubbleSort(randomSums));
    }
}
//# sourceMappingURL=e1.js.map
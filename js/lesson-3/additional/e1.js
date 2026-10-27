"use strict";
// Задача 1. На екран виводиться меню:
// 1. Веселий
// 2. Сумний
// 3. Обурений
// Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення смайла. 
const HAPPY = 1;
const SAD = 2;
const OFFENDED = 3;
alert('Menu : 1 - 😁, 2 - 😕, 3 - 😤');
const moodNumber = parseInt(prompt('Please enter the number from the menu (1-3)') ?? '');
let msg = '';
switch (moodNumber) {
    case HAPPY:
        msg = '😁';
        break;
    case SAD:
        msg = '😕';
        break;
    case OFFENDED:
        msg = '😤';
        break;
    default: msg = 'Entered number is not valid, please enter the correct number (1-3)';
}
document.write(`Your mood : ${msg}`);
//# sourceMappingURL=e1.js.map
// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
// нижній ліміт генерованого номеру місяця : const MOTNH_NUMBER_FROM 
// верхній ліміт генерованого номеру місяця : const MOTNH_NUMBER_TO
// генерований номер місяця відповідаючий ліматам : const monthNumber
// нижній ліміт генерованого номеру дня : const dayNumberFrom 
// верхній ліміт генерованого номеру дня : const dayNumberTo
// генерований номер місяця відповідаючий ліматам : const dayNumber
// сума генерованих номерів місяця та дня: const sum

const MOTNH_NUMBER_FROM  = 1
const MOTNH_NUMBER_TO = 12 
const monthNumber = Math.floor(Math.random() * (MOTNH_NUMBER_TO - MOTNH_NUMBER_FROM + 1)) + MOTNH_NUMBER_FROM

const DAY_NUMBER_FROM  = 0
const DAY_NUMBER_TO = 6
const dayNumber = Math.floor(Math.random() * (DAY_NUMBER_TO - DAY_NUMBER_FROM + 1)) + DAY_NUMBER_FROM

const sum = monthNumber + dayNumber

document.write("Sum of the random month and day numbers = ", `${sum}`)
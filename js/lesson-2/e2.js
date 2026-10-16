// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
// довільний рік народження : const yearOfBirdth 
// поточний рік : const currentYear 
// кількість років обчислених за умовою : const age

const yearOfBirdth = parseInt(prompt('Enter your year of birdth', '2004'))
const currentYear = 2026

const age = currentYear - yearOfBirdth

document.write('The age is ',`${age}`)

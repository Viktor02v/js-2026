// Задача 0. Обчислити значення виразів
// 1. Вираз S1=a+12+b
// довільне число : const a
// довільне число : const b
// данне число : givenNumber = 12
// сума довільних і данного чисел обсчислених за виразом : const totalSum

const a = parseInt(prompt('Enter the number for "a"', '0'))
const b = parseInt(prompt('Enter the number for "b"', '0'))
const givenNumber = 12

const totalSum = a + b + givenNumber
document.write('Total sum "S = a+12+b" = ',`${totalSum}`)


// 2. Вираз S2 = √((a + b) / (2a))
// довільне число : const a
// довільне число : const b
// сума довільних чисел обсчислених за виразом : const totalSum

const a = parseInt(prompt('Enter the number for "a"', '0'))
const b = parseInt(prompt('Enter the number for "b"', '0'))

const totalSum = Math.sqrt((a + b) / (2 * a))
document.write('Total sum "S2 = √((a + b) / (2a))" = ',`${totalSum}`)
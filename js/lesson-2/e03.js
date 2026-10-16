// 4. Вираз : S4=sin⁡(a / -b) 
// довільне число : const a
// довільне число : const b
// сума довільних чисел обсчислених за виразом : const totalSum

const a = parseInt(prompt('Enter the number for "a"', '0'))
const b = parseInt(prompt('Enter the number for "b"', '0'))

const totalSum = Math.sin(a / -b)
document.write('Total sum "S4=sin⁡(a / -b)" = ',`${totalSum}`)
// 3. Вираз : S2 = ∛((a + b)c)
// довільне число : const a
// довільне число : const b
// довільне число : const c
// сума довільних чисел обсчислених за виразом : const totalSum

const a = parseInt(prompt('Enter the number for "a"', '0'))
const b = parseInt(prompt('Enter the number for "b"', '0'))
const c = parseInt(prompt('Enter the number for "c"', '0'))

const totalSum = Math.cbrt(( a + b ) * c)
document.write('Total sum "S2 = ∛((a + b)c)" = ',`${totalSum}`)
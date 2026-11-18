// Заповнити масив заданої довжини різними простими числами.
// Натуральне число, більше за одиницю, називається простим,
// якщо воно ділиться тільки на себе та на одиницю.

{
  const arrLength = parseInt(prompt('Please enter the desired array length')!)

  const arr: number[] = []
  let number = 2

  while (arr.length < arrLength) {
    let isPrime = true

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      arr.push(number)
    }

    number++
  }

  document.write(`
    <p>${arr}</p>
  `)
}

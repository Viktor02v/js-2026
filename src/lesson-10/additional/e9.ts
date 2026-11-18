// Створити масив, на парних місцях у якому стоять одиниці,
// а на непарних місцях – числа, що дорівнюють залишку від ділення свого номера на 5.

{
  const arrLength = parseInt(
    prompt(
      'Please enter the number that gonna represent the length of the array',
    )!,
  )

  const arr = Array.from({ length: arrLength }, (_, index) => {
    if (index % 2 === 0) return 1
    else return index % 5
  })

  document.write(`
    <p>${arr}</p>
    `)
}

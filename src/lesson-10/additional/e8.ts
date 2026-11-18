// Створити масив, кожен елемент якого дорівнює квадрату свого номера.

{
  const arrLength = parseInt(
    prompt(
      'Please enter the number that gonna represent the length of the array',
    )!,
  )

  const arr = Array.from({ length: arrLength }, (_, index) => index ** 2)

  document.write(`
    <p>${arr}</p>
    `)
}

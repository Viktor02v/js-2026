// Сформувати спадний масив із чисел, що діляться на 3.

{
  const arrLength = parseInt(
    prompt(
      'Please enter the number that gonna represent the length of the array',
    )!,
  )

  const arr = Array.from({ length: arrLength }, (_, index) => 2 * index + 2)

  document.write(`
    <p>${arr}</p>
    `)
}

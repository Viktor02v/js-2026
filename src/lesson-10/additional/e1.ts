// Заповнити масив нулями, крім першого й останнього елементів,
// котрі мають дорівнювати одиниці.

{
  const arrLength = parseInt(
    prompt(
      'Please enter the number that gonna represent the length of the array',
    )!,
  )

  const arr = Array.from({ length: arrLength }, (_, index) => {
    if (index === 0 || index === arrLength - 1) return 1
    else return 0
  })

  document.write(`
    <p>${arr}</p>
    `)
}

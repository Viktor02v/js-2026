// Дано масив елементів. Вивести на екран елементи, що більші за 100

{
  if (confirm('Start testing ?')) {
    const MIN = 1
    const MAX = 300
    let userNumber = parseInt(
      prompt(
        'Please enter the amount of the array elements you want to generate',
      )!,
    )

    const userArray = new Array(userNumber)

    function generateRandomNumber(min: number, max: number): number {
      return min + Math.floor(Math.random() * (max - min + 1))
    }

    for (let i = 0; i < userArray.length; i++) {
      userArray[i] = generateRandomNumber(MIN, MAX)
    }

    for (const element of userArray) {
      if (element > 100) {
        document.write(`
      <p>${element}</p>
      `)
      }
    }

    document.write(`
      <p>Arr : ${userArray.join(', ')}</p>
      `)
  }
}

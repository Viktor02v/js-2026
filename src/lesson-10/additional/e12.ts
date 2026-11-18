// Сформувати масив із випадкових чисел, у якому рівно дві одиниці стоять на випадкових позиціях.

{
  const arrLength = 10
  function getRandomNumber(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  const randomIndexes: number[] = []

  while (randomIndexes.length !== 2) {
    const randomIndex = getRandomNumber(0, arrLength - 1)
    if (randomIndexes.includes(randomIndex)) continue
    randomIndexes.push(randomIndex)
  }

  const arr = Array.from({ length: arrLength }, (_, index) => {
    const randomNum = getRandomNumber(2, arrLength)
    if (randomIndexes.some((randomIndex) => index === randomIndex)) return 1
    return randomNum
  })

  document.write(`
    <p>${arr}</p>
    `)
}

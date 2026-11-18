// Заповніть масив випадковим чином нулями та одиницями так,
// щоб кількість одиниць була більшою за кількість нулів.

{
  const arrLength = 10

  const ZEROS = Math.floor((arrLength - 1) / 2)
  const ONES = arrLength - ZEROS

  function getRandomNumber(min: number, max: number): number {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function fillArr(limit: number): number[] {
    let arr: number[] = []
    while (arr.length !== limit) {
      const randomNumber = getRandomNumber(0, arrLength - 1)
      if (arr.includes(randomNumber)) continue
      arr.push(randomNumber)
    }
    return arr
  }

  const randomOnePossitions = fillArr(ONES)

  const arr = Array.from({ length: arrLength }, (_, index) => {
    if (randomOnePossitions.includes(index)) return 1
    else return 0
  })

  document.write(`
    <p>${arr}</p>
    `)
}

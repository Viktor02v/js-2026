// Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
// Заповнити його випадковим чином.
// Підрахувати для кожного рядка кількість неділь.

{
  // if (confirm('Start testing ?')) {
  enum Day {
    MONDAY = 0,
    TUESDAY = 1,
    WEDNESDAY = 2,
    THURSDAY = 3,
    FRIDAY = 4,
    SATURDAY = 5,
    SUNDAY = 6,
  }

  const ROWS = 4
  const COLS = 8

  function getRandomDay(min: Day, max: Day): Day {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  // Filling matrix arr with random day numbers
  function fillRowsWithCols(
    colsNumber: number,
    generateNumber: () => Day,
  ): Day[] {
    return Array.from({ length: colsNumber }, () => generateNumber())
  }

  // Generating matrix
  function generateMatrix(
    rowsNumber: number,
    colsNumber: number,
    min: Day,
    max: Day,
  ): Day[][] {
    return Array.from({ length: rowsNumber }, () =>
      fillRowsWithCols(colsNumber, () => getRandomDay(min, max)),
    )
  }

  const arr = generateMatrix(ROWS, COLS, Day.MONDAY, Day.SUNDAY)

  arr.forEach((el, rowIndex) => {
    let sundayCount = 0
    let rowNumber = rowIndex + 1
    el.forEach((el) => {
      if (el === Day.SUNDAY) sundayCount++
    })
    document.write(`
        Row: ${rowNumber}, sunday number count: ${sundayCount} <br>
        `)
  })

  console.log(arr)
  // }
}

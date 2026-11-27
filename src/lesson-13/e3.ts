// Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”,
// починаючи з деякої заданої ситуації
// (тобто маємо двовимірний масив з елементами : 0 - нулик,
// Х - хрестик, пробіл - ще не зайнято,
// і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок
// (де пробіли). Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.

{
  if (confirm('Start testing ?')) {
    const board: string[][] = [
      ['O', 'X', ' '],
      [' ', 'O', ' '],
      ['X', ' ', ' '],
    ]

    const allResults: string[][][] = []

    let emptyCells = 0

    for (const row of board) {
      for (const cell of row) {
        if (cell === ' ') emptyCells++
      }
    }

    function generateResults(
      currentBoard: string[][],
      filledCount: number,
    ): void {
      if (filledCount === emptyCells) {
        allResults.push(currentBoard.map((row) => [...row]))
        return
      }

      for (let row = 0; row < currentBoard.length; row++) {
        for (let col = 0; col < currentBoard[row]!.length; col++) {
          if (currentBoard[row]![col] === ' ') {
            currentBoard[row]![col] = 'O'
            generateResults(currentBoard, filledCount + 1)
            currentBoard[row]![col] = ' '
            currentBoard[row]![col] = 'X'
            generateResults(currentBoard, filledCount + 1)
            currentBoard[row]![col] = ' '
            return
          }
        }
      }
    }

    generateResults(board, 0)

    console.log(allResults)
  }
}

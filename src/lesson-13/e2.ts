//  Дано масив імен спортсменів.
// Розробити програму для виведення усіх можливих результатів змагань
// (списки імен у відповідності до місць, які вони займуть).

{
  if (confirm('Start testing ?')) {
    const names = ['Ostap', 'Anna', 'Patrik']

    const resultCombinations: string[][] = []

    function getResultCombinations(
      combination: string[],
      namesArr: string[],
    ): void {
      if (combination.length === namesArr.length) {
        resultCombinations.push([...combination])
        return
      }

      for (const name of names) {
        if (!combination.includes(name)) {
          combination.push(name)
          getResultCombinations(combination, namesArr)
          combination.pop()
        }
      }
    }

    getResultCombinations([], names)

    console.log(resultCombinations)
  }
}

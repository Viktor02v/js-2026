// Дано масив хлопців і дівчат вивести всі можливі
// комбінації для танців з хлопців і дівчат.

{
  if (confirm('Start testing ?')) {
    {
      const boys = ['Artem', 'Ivan', 'Oleg']
      const girls = ['Anna', 'Ira', 'Nastya']

      const danceCombinations: string[][] = []

      function getDancePairs(
        combination: string[],
        boys: string[],
        girls: string[],
      ): void {
        if (combination.length === 2) {
          danceCombinations.push([...combination])
          return
        }

        for (const boy of boys) {
          combination.push(boy)
          for (const girl of girls) {
            combination.push(girl)
            getDancePairs(combination, boys, girls)
            combination.pop()
          }
          combination.pop()
        }
      }

      getDancePairs([], boys, girls)

      console.log(danceCombinations)
    }
  }
}

// Дано одновимірний масив, у якому зберігається певна виграшна сума
// (елементи заповнюються випадковим чином значеннями від -500 до 500).
// Надаючи користувачу можливість вибирати номери елементів
// (поки він не відмовиться). Знаходити сумарний виграш.

{
  if (confirm('Start testing ?')) {
    const MIN = -500
    const MAX = 500
    const ARR_LENGTH = 10

    function generateRandomNumbers(min: number, max: number): number {
      return min + Math.floor(Math.random() * (max - min + 1))
    }

    function generateValues(
      arrLength: number,
      min: number,
      max: number,
    ): number[] {
      let arr = new Array(arrLength)
      for (let i = 0; i < arrLength; i++) {
        arr[i]! = generateRandomNumbers(min, max)
      }
      return arr
    }

    function removeArrayElement(arr: number[], fromIndex: number): void {
      let toIndex = arr.length - 1
      for (let i = fromIndex; i < toIndex; i++) {
        arr[i] = arr[i + 1]!
      }
      arr.length--
    }

    let lotteryArr = generateValues(ARR_LENGTH, MIN, MAX)

    function playGame(lotteryArr: number[]): {
      openedAmount: number
      openedAmounts: number[]
    } {
      let isPlaying = true
      let openedAmount = 0
      let openedAmounts = []

      do {
        let userNumber = parseInt(
          prompt(`Please select a number from 1 to ${lotteryArr.length}`)!,
        )
        let errorMsg = `Entered number is not valid, please make sure that it's within the 1 - ${lotteryArr.length} scope`
        if (
          userNumber < 1 ||
          userNumber > lotteryArr.length ||
          Number.isNaN(userNumber)
        ) {
          document.write(`
            <p style="color:red;">${errorMsg}</p>
            `)
          continue
        }

        const selectedNumber = userNumber - 1
        openedAmount += lotteryArr[selectedNumber]!
        openedAmounts.push(lotteryArr[selectedNumber]!)
        removeArrayElement(lotteryArr, selectedNumber)

        if (
          confirm(
            `Would you like to continue, your lottery balance is ${openedAmount}`,
          )
        )
          continue
        else isPlaying = false
      } while (isPlaying && lotteryArr.length !== 0)

      return { openedAmount, openedAmounts }
    }

    const { openedAmount, openedAmounts } = playGame(lotteryArr)

    document.write(`
        <p>Lottery Arr : ${lotteryArr}</p>
        <p>Total Opened Amount : ${openedAmount}</p>
        <p>Opened Amounts Arr : ${openedAmounts}</p>
        `)
  }
}

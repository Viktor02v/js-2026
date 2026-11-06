// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»
// (для отримання першої літери можна також звернутися до номера
// авто як string ніби як до масиву за номером 0 - autoNum[0]-перша літера);
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;

{
  if (confirm('Start testing ?')) {
    const LETTER_LIMIT = 2
    const MIN_NUMBER = 1
    const MAX_NUMBER = 5
    const MIN_LETTER_NUMBER = 65
    const MAX_LETTER_NUMBER = 69

    const vehicleNumbersAmount = parseInt(
      prompt(
        `Please enter the amount of the vehicle numbers, you'd like to generate`,
        '5',
      )!,
    )

    function generateNumber(minNumber: number, maxNumber: number): number {
      return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
    }

    function getVehicleNumberStats(
      vehicleNumbers: string[],
      maxNumber: number,
    ): {
      startWithA: number
      sameStartEndLetters: number
      moreThanFiveSymbols: number
    } {
      let startWithA = 0
      let sameStartEndLetters = 0
      let moreThanFiveSymbols = 0

      for (let i = 0; i < vehicleNumbers.length; i++) {
        if (vehicleNumbers[i]![0] === 'A') startWithA++
        if (
          vehicleNumbers[i]![0] ===
          vehicleNumbers[i]![vehicleNumbers[i]!.length - 1]
        )
          sameStartEndLetters++
        if (vehicleNumbers[i]!.length > maxNumber) moreThanFiveSymbols++
      }
      return { startWithA, sameStartEndLetters, moreThanFiveSymbols }
    }

    function getVehicleNumberReport(
      vehicleNumbersAmount: number,
      minNumber: number,
      maxNumber: number,
      minLetterNumber: number,
      maxLetterNumber: number,
    ) {
      let vehicleNumbers = new Array(vehicleNumbersAmount)

      for (let i = 0; i < vehicleNumbersAmount; i++) {
        vehicleNumbers[i] = ''
        let l = minNumber
        let n = generateNumber(minNumber, maxNumber)
        let sl = minNumber
        do {
          vehicleNumbers[i] +=
            `${String.fromCharCode(generateNumber(minLetterNumber, maxLetterNumber))}`
          l++
        } while (l <= LETTER_LIMIT)
        do {
          vehicleNumbers[i] += generateNumber(minNumber, maxNumber)
          n++
        } while (n <= maxNumber)
        do {
          vehicleNumbers[i] +=
            `${String.fromCharCode(generateNumber(minLetterNumber, maxLetterNumber))}`
          sl++
        } while (sl <= LETTER_LIMIT)
      }

      const vehicleStats = getVehicleNumberStats(vehicleNumbers, maxNumber)

      return { vehicleNumbers, vehicleStats }
    }

    const { vehicleNumbers, vehicleStats } = getVehicleNumberReport(
      vehicleNumbersAmount,
      MIN_NUMBER,
      MAX_NUMBER,
      MIN_LETTER_NUMBER,
      MAX_LETTER_NUMBER,
    )

    document.write(`
  <p>Vehicle numbers amount : ${vehicleNumbersAmount}</p>
  <p>Vehicle numbers list : <br> ${vehicleNumbers.join('<br>')}</p>
  <p>Count of numbers that start with "A" letter : ${vehicleStats.startWithA}</p>
  <p>Count of numbers which first and last letters are the same  : ${vehicleStats.sameStartEndLetters}</p>
  <p>Count of numbers that contain more then 5 symbols  : ${vehicleStats.moreThanFiveSymbols}</p>
  `)
  }
}

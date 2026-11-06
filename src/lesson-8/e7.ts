// Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

{
  if (confirm('Start testing ?')) {
    const MIN = 1
    const MAX = 12
    const MAX_BILL_AMOUNT = 10000

    function generateRandomNumber(min: number, max: number): number {
      return min + Math.floor(Math.random() * (max - min + 1))
    }

    function getBillsStatuses(bills: number[]): {
      totalForYear: number
      totalForFirstHalf: number
      totalForSecondHalf: number
      totalForSummer: number
      totalForSecondQuarter: number
      totalForEvenMoths: number
      totalForTheFirstSeasonMonth: number
    } {
      const SUMMER_START = 5
      const SUMMER_END = 8
      const SECOND_QUARTER_START = 3
      const SECOND_QUARTER_END = 6

      let totalForYear = 0
      let totalForFirstHalf = 0
      let totalForSecondHalf = 0
      let totalForSummer = 0
      let totalForSecondQuarter = 0
      let totalForEvenMoths = 0
      let totalForTheFirstSeasonMonth = 0

      const firstHalf = Math.floor(bills.length / 2)

      for (let i = 0; i < bills.length; i++) {
        totalForYear += bills[i]!
      }
      for (let i = 0; i < firstHalf; i++) {
        totalForFirstHalf += bills[i]!
      }
      for (let i = firstHalf; i < bills.length; i++) {
        totalForSecondHalf += bills[i]!
      }
      for (let i = SUMMER_START; i < SUMMER_END; i++) {
        totalForSummer += bills[i]!
      }
      for (let i = SECOND_QUARTER_START; i < SECOND_QUARTER_END; i++) {
        totalForSecondQuarter += bills[i]!
      }
      for (let i = 1; i < bills.length; i += 2) {
        totalForEvenMoths += bills[i]!
      }
      for (let i = 2; i < bills.length; i += 3) {
        totalForTheFirstSeasonMonth += bills[i]!
      }

      return {
        totalForYear,
        totalForFirstHalf,
        totalForSecondHalf,
        totalForSummer,
        totalForSecondQuarter,
        totalForEvenMoths,
        totalForTheFirstSeasonMonth,
      }
    }

    function getBillsReport(
      min: number,
      maxDate: number,
      maxBillAmount: number,
    ): {
      bills: number[]
      billsStatuses: {
        totalForYear: number
        totalForFirstHalf: number
        totalForSecondHalf: number
        totalForSummer: number
        totalForSecondQuarter: number
        totalForEvenMoths: number
        totalForTheFirstSeasonMonth: number
      }
    } {
      const bills = new Array(maxDate)

      for (let i = 0; i < maxDate; i++) {
        bills[i] = generateRandomNumber(min, maxBillAmount)
      }
      const billsStatuses = getBillsStatuses(bills)
      return { bills, billsStatuses }
    }

    const { bills, billsStatuses } = getBillsReport(MIN, MAX, MAX_BILL_AMOUNT)

    document.write(`
    <p>Bills for the year list : ${bills.join(', ')}</p>
    <p>Total bills amount for year : ${billsStatuses.totalForYear}</p>
    <p>Total for first half : ${billsStatuses.totalForFirstHalf}</p>
    <p>Total for second half : ${billsStatuses.totalForSecondHalf}</p>
    <p>Total for summer : ${billsStatuses.totalForSummer}</p>
    <p>Total for second quarter : ${billsStatuses.totalForSecondQuarter}</p>
    <p>Total for even months : ${billsStatuses.totalForEvenMoths}</p>
    <p>Total for the first months of seasons : ${billsStatuses.totalForTheFirstSeasonMonth}</p>
    `)
  }
}

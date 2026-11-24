// Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів під час сортування включеннями.

{
  if (confirm('Start testing ?')) {
    const MIN = -100
    const MAX = 200
    function generateNumber(min: number, max: number): number {
      return min + Math.floor(Math.random() * (max - min + 1))
    }
    const randomSums: number[] = Array.from({ length: 30 }, () =>
      generateNumber(MIN, MAX),
    )

    function insertSort(arr: number[]): number {
      let changeCount = 0

      for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]!
        let prevElIndex = i - 1
        while (prevElIndex >= 0 && arr[prevElIndex]! > currentVal) {
          arr[prevElIndex + 1] = arr[prevElIndex]!
          prevElIndex = prevElIndex - 1
        }
        arr[prevElIndex + 1] = currentVal
      }

      return changeCount
    }
    console.log(insertSort(randomSums))
    console.log(randomSums)
  }
}

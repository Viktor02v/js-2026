// Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів під час сортування змішуванням.

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
    function cocktailShakeSort(arr: number[]): number {
      let changeCount = 0
      let leftIndex = 0
      let rightIndex = arr.length - 1
      while (leftIndex < rightIndex) {
        for (let i = leftIndex; i < rightIndex; i++) {
          if (arr[i]! > arr[i + 1]!) {
            const temp = arr[i + 1]!
            arr[i + 1] = arr[i]!
            arr[i] = temp
            changeCount++
          }
        }
        rightIndex--
        for (let i = rightIndex; i > leftIndex; i--) {
          if (arr[i]! < arr[i - 1]!) {
            const temp = arr[i - 1]!
            arr[i - 1] = arr[i]!
            arr[i] = temp
            changeCount++
          }
        }
        leftIndex++
      }
      return changeCount
    }
    console.log(cocktailShakeSort(randomSums))
    console.log(randomSums)
  }
}

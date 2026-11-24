// Задача 4. Для розглянутих методів сортування спробувати вивести
// етапи сортування шляхом виведення відповідних таблиць за зразком.

{
  if (confirm('Start testing ?')) {
    const MIN = -100
    const MAX = 200

    function generateNumber(min: number, max: number): number {
      return min + Math.floor(Math.random() * (max - min + 1))
    }

    const randomSums: number[] = Array.from({ length: 5 }, () =>
      generateNumber(MIN, MAX),
    )

    function bubbleSort(arr: number[]): void {
      let changed = true
      do {
        changed = false
        for (let c = 1; c < arr.length; c++) {
          if (arr[c]! < arr[c - 1]!) {
            const temp = arr[c - 1]!
            arr[c - 1] = arr[c]!
            arr[c] = temp
            changed = true
            document.write(`
            <p>${arr}<br></p>
            `)
          }
        }
      } while (changed)
    }

    bubbleSort(randomSums)
  }
}

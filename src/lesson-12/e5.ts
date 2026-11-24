// Дано масив імен.
// Застосовуючи відповідне сортування та бінарний пошук визначити,
// чи є у масиві ім’я «Olga» і під яким індексом.

{
  if (confirm('Start testing ?')) {
    const SEARCH_EL = 'Olga'

    const namesArr = [
      'Stepan',
      'Igor',
      'Tanya',
      'Olga',
      'Ivan',
      'Alina',
      'Damian',
      'Oksana',
    ]

    function bubbleSort(arr: string[]): string[] {
      let sortedArr = [...arr]
      let changed = true
      do {
        changed = false
        for (let c = 0; c < sortedArr.length - 1; c++) {
          if (sortedArr[c]! > sortedArr[c + 1]!) {
            const temp = sortedArr[c + 1]!
            sortedArr[c + 1] = sortedArr[c]!
            sortedArr[c] = temp
            changed = true
          }
        }
      } while (changed)
      return sortedArr
    }

    let sortedArr = bubbleSort(namesArr)

    function binarySearch(
      arr: string[],
      searchEl: string,
    ): { isExist: boolean; elIndex: number | null } {
      let isExist = false
      let elIndex: number | null = null
      let start = 0
      let end = arr.length - 1

      while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (arr[middle] === searchEl)
          return {
            isExist: true,
            elIndex: middle,
          }
        else if (searchEl > arr[middle]!) start = middle + 1
        else if (searchEl < arr[middle]!) end = middle - 1
      }
      return { isExist, elIndex }
    }

    console.log(namesArr)
    console.log(sortedArr)
    console.log(binarySearch(sortedArr, SEARCH_EL))
  }
}

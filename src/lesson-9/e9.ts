// Дано масив імен.
// Сформувати масив з перших літер цих імен.

{
  if (confirm('Start testing ?')) {
    const userArrLength = parseInt(
      prompt('Please enter the amount of names you want to be in your array')!,
    )

    const userArray: string[] = new Array(userArrLength)

    function fillArrWithUserValues(arr: string[]): void {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = prompt(`Please enter the name: ${i + 1}`)!
      }
    }

    fillArrWithUserValues(userArray)

    const arrWithFirstNameLetters = userArray.map((element) => {
      return element[0]
    })

    document.write(`
      <p>Original arr : ${userArray.join(' , ')}</p>
      <p>First letters arr  : ${arrWithFirstNameLetters.join(' , ')}</p>
      `)
  }
}

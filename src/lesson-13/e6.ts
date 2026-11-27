// З використанням замикань розробити ітератор, тобто функцію,
// що буде поступово за окремими викликами видавати по одну букву наперед заданого слова.
// З використанням нього розробити гру «Прекладач».
// Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова.
// Підрахувати кількість вгаданих букв.

{
  if (confirm('Start testing ?')) {
    const guessWord = 'Morning'
    const guessWordDescription = 'It goes next right after the night!'

    function iterator(guessWord: string, guessWordDescription: string) {
      let guessWordToLowerCase = guessWord.toLowerCase()
      let guessWordCopyToLowerCase = guessWord.toLowerCase()
      let guessedLettersCount = 0
      let opennedLetters = 0

      function getNextLetter() {
        if (guessWordCopyToLowerCase.length === 0)
          return alert(`You have already openned all the letters!`)
        let letter = guessWordCopyToLowerCase.charAt(0)!
        let updatedWord = guessWordCopyToLowerCase.slice(1)
        guessWordCopyToLowerCase = updatedWord
        document.write(`${letter} <br>`)
        opennedLetters++
        // console.log(guessWordCopyToLowerCase)
      }

      function showWordDescription() {
        document.write(`Guess word description : ${guessWordDescription}<br>`)
      }

      function guessLetter() {
        if (guessWordCopyToLowerCase.length === 0)
          return alert(`You have already openned all the letters!`)
        let userLetterToLowerCase = prompt(
          'Please enter one letter that you assume the word might contain!',
        )?.toLocaleLowerCase()!
        if (!guessWordCopyToLowerCase.includes(userLetterToLowerCase))
          alert(`The word doesn't contain entered letter!`)
        else {
          let userLetterIndex = guessWordCopyToLowerCase.indexOf(
            userLetterToLowerCase,
          )
          let letter = guessWordCopyToLowerCase.charAt(userLetterIndex)!
          document.write(`${letter}`)
          let updatedWord =
            guessWordCopyToLowerCase.slice(0, userLetterIndex) +
            guessWordCopyToLowerCase.slice(userLetterIndex + 1)
          guessWordCopyToLowerCase = updatedWord
          guessedLettersCount++
          // console.log(guessWordCopyToLowerCase)
        }
      }

      function checkWord() {
        let userWordToLowerCase = prompt(
          'Please enter you word guess!',
        )?.toLowerCase()
        if (userWordToLowerCase === guessWordToLowerCase) {
          alert(`Congrats you've guessed the word!`)
          return
        } else alert(`Wrong word, try again!`)
      }

      function showGameStats() {
        document.write(`Guessed letters: ${guessedLettersCount} <br>`)
        document.write(`Opened letters : ${opennedLetters} <br>`)
        document.write(
          `Remained word letters: ${guessWordCopyToLowerCase.length} <br>`,
        )
      }

      return {
        getNextLetter,
        guessLetter,
        showWordDescription,
        checkWord,
        showGameStats,
      }
    }

    const {
      getNextLetter,
      guessLetter,
      showWordDescription,
      checkWord,
      showGameStats,
    } = iterator(guessWord, guessWordDescription)

    // showWordDescription()
    // getNextLetter()
    // getNextLetter()
    // getNextLetter()
    // getNextLetter()
    // getNextLetter()
    // getNextLetter()
    // getNextLetter()
    // guessLetter()
    // checkWord()
    // showGameStats()
  }
}

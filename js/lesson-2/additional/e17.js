// Зашифрувати один введений англійський символ у верхньому регістрі
// (один з символів: A,B,…Z)  методом зміщення (шифр Цезаря).

const SYMBOLS_AMOUNT = 26
const MARGIN = 3
const FIRST_LETTER_CODE = 'A'.charCodeAt(0)

const symbol = prompt('Enter an uppercase English letter', 'A')

const symbolNumber = symbol.charCodeAt(0)
const alphabetPosition = symbolNumber - FIRST_LETTER_CODE
const shiftedPosition = (alphabetPosition + MARGIN) % SYMBOLS_AMOUNT
const shiftedSymbol = String.fromCharCode(shiftedPosition + FIRST_LETTER_CODE)

document.write(`
  <p>Original symbol: ${symbol}</p>
  <p>Symbol code: ${symbolNumber}</p>
  <p>Alphabet position: ${alphabetPosition}</p>
  <p>Encrypted symbol: ${shiftedSymbol}</p>
`)


// Тренажер додавання.
// Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.

{
  if (confirm('Start testing ?')) {
    let correctCount = 0
    let wrongCount = 0

    setInterval(() => {
      let a = Math.floor(Math.random() * 10)
      let b = Math.floor(Math.random() * 20)
      let sum = a + b
      let userAnswer = parseInt(prompt(`${a} + ${b} =`)!)
      if (userAnswer === sum) {
        alert('Correct!')
        document.querySelector('#correct')!.textContent =
          `Correct answers: ${++correctCount}`
      } else {
        alert('Wrong!')
        document.querySelector('#wrong')!.textContent =
          `Wrong answers: ${++wrongCount}`
      }
    }, 10000)
  }
}

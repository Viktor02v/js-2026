// Дано масив імен учнів.
// З’ясувати скільки разів зустрічається ім’я «Іван».

{
  if (confirm('Start testing ?')) {
    const studentNamesNumber = parseInt(
      prompt(
        'Please enter the number of student names you want to enter',
        '3',
      )!,
    )

    const nameCount = function getNameCount(namesNumber: number): number {
      let count = 0
      let studentNames = new Array(namesNumber)
      for (let i = 0; i < namesNumber; i++) {
        studentNames[i] = prompt(
          `Please enter the name for the ${i + 1} student`,
        )
        switch (studentNames[i]) {
          case 'Ivan':
            count++
            break
        }
      }
      return count
    }

    document.write(`
    <p>
    The count : ${nameCount(studentNamesNumber)}
    </p>`)
  }
}

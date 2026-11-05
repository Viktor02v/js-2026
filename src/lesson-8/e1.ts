// Дано масив, який містить оцінки з К предметів.
// Знайти середній бал і з’ясувати до якої категорії він відноситься
// (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно),
// трійочник(є хоча би одна трійка)).

{
  if (confirm('Start testing ?')) {
    const MIN_GRADE = 2
    const MAX_GRADE = 5

    const subjectsNumber = parseInt(
      prompt('Please enter the amount of subjects', '5')!,
    )

    function getAverageGrade(grades: number[]): number {
      let totalGradesSum = 0
      let gradesAmount = grades.length
      if (!grades || grades.length === 0) throw new Error('Smth went wrong!')
      for (let i = 0; i < gradesAmount; i++) {
        totalGradesSum += grades[i]!
      }
      return totalGradesSum / gradesAmount
    }

    function getStudentPerformance(
      subjectsNumber: number,
      minGrade: number,
      maxGrade: number,
    ): { status: string; average: number; grades: number[] } {
      let status = ''
      let grades = new Array(subjectsNumber)
      let hasTwo = false
      let hasThree = false
      let hasFour = false

      for (let i = 0; i < subjectsNumber; i++) {
        grades[i] =
          minGrade + Math.floor(Math.random() * (maxGrade - minGrade + 1))
        switch (grades[i]) {
          case 4:
            hasFour = true
            break
          case 3:
            hasThree = true
            break
          case 2:
            hasTwo = true
            break
        }
      }

      if (hasTwo) status = 'F Student'
      else if (hasThree) status = 'C Student'
      else if (hasFour) status = 'Good Student'
      else status = 'Straight-A Student'

      let average = getAverageGrade(grades)

      return { status, average, grades }
    }

    let {
      status: studentStatus,
      average: studentAverageGrade,
      grades: studentGrades,
    } = getStudentPerformance(subjectsNumber, MIN_GRADE, MAX_GRADE)

    document.write(`
      <p>Subjects amount: ${subjectsNumber} </p>
      <p>Student Grades: ${studentGrades} </p>
      <p>Student status ${studentStatus}</p>
      <p>Student average ${studentAverageGrade}</p>
    `)
  }
}

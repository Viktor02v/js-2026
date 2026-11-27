// З використанням замикань розробити ітератор, тобто функцію,
// що буде поступово за окремими викликами видавати по одне
// значення від заданого мінімального до заданого максимального.
// Якщо значення досягне максимального, то наступним буде мінімальне значення.
// З використанням цієї функції реалізувати перебір номерів місяців.

{
  if (confirm('Start testing ?')) {
    const MIN = 1
    const MAX = 12

    enum Months {
      January = 1,
      February = 2,
      March = 3,
      April = 4,
      May = 5,
      June = 6,
      July = 7,
      August = 8,
      September = 9,
      October = 10,
      November = 11,
      December = 12,
    }

    function iterator(min: number, max: number) {
      let current = min

      function nextMonth() {
        if (current === max) {
          let temp = current
          current = min
          return document.write(`${temp} ${Months[temp]} <br>`)
        } else {
          let temp = current
          current++
          return document.write(`${temp} ${Months[temp]} <br>`)
        }
      }

      return { nextMonth }
    }

    const { nextMonth } = iterator(MIN, MAX)
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
    nextMonth()
  }
}

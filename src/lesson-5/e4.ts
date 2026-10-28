// Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M.
// Маючи К снарядів користувач намагається потопити корабель.
// if (confirm('Почати тестування?')) {
// const WIDTH_Y = 100
// const WIDTH_X = 100
// const CELL_SIZE = 20

// const shots = 3
// const cols = WIDTH_X / CELL_SIZE
// const rows = WIDTH_Y / CELL_SIZE

// const shipRow = 1 + Math.floor(Math.random() * rows)
// const shipCol = 1 + Math.floor(Math.random() * cols)

// let msg = ''

// for (let row = 1; row <= rows; row++) {
//   for (let col = 1; col <= cols; col++) {
//     document.write(`
//       <div style="
//         display: inline-block;
//         width: ${CELL_SIZE}px;
//         height: ${CELL_SIZE}px;
//         border: 1px solid black;
//         box-sizing: border-box;
//       "></div>
//     `)
//   }
//   document.write('<br>')
// }

// for (let shot = 1; shot <= shots; shot++) {
//   let userRow = Number(prompt(`Please enter the number of the cell by Y you have ${1 + (shots - shot)} shots left`))
//   let userCol = Number(prompt(`Please enter the number of the cell by X you have ${1 + (shots - shot)} shots left`))
//   if(userRow === shipRow && userCol === shipCol){
//     msg = `You've won`
//     break
//   } msg = "Sorry, you've lost try again"
// }

// document.write(`${msg}`)
// }
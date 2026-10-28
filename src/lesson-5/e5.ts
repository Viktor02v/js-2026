// Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. 
// Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

// if (confirm('Почати тестування?')) {
//   const DAYS_IN_WEEK = 7

//   const weeks = Number(prompt('Enter the amount of weeks', '1'))
//   let totalProfit = 0

//   for (let w = 1; w <= weeks; w++) {
//     let weekProfit = 0
//     for (let d = 1; d <= DAYS_IN_WEEK; d++) {
//       let dayProfit = Number(
//         prompt(`Enter the profit for day ${d} of week ${w}`)
//       )
//       if (!isFinite(dayProfit)) continue
//       totalProfit += dayProfit
//       weekProfit += dayProfit
//     }
//     document.write(`<p>Profit for week ${w}: ${weekProfit}$</p>`)
//   }

//   document.write(`<p>Total profit: ${totalProfit}$</p>`)
// }
// Інвестор вклав  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. 
// Визначити за допомогою циклів суму, яку він одержить.

{
if(confirm('Start testing?')){

const INVESTMENT_YEARS = 20
const ANNUAL_INTEREST_RATE = 0.2
const TAX = 0.05
let totalProfit = 0

let userInvestment = parseInt(prompt('Please enter the amount that you would like to invest')!)

for(let i = 0; i < INVESTMENT_YEARS; i++){
  let profit = userInvestment * ANNUAL_INTEREST_RATE
  totalProfit += profit
  userInvestment += profit
}

const taxAmount = totalProfit * TAX
const investmentAfterTax = userInvestment - taxAmount

document.write(`
<p>Total Sum After Tax : ${investmentAfterTax.toFixed(2)}</p>
<p>Total Profit Sum : ${totalProfit.toFixed(2)}</p>
<p>Tax Amount (Taken out of the Total Profit): ${taxAmount.toFixed(2)}</p>
`)
}
}
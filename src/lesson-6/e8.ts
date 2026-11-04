//  Інвестор вклав S тис. грн на 20 років під 20% річних. 
// Визначити за допомогою циклів суму, яку він одержить (без оподаткування).
{
if(confirm('Start testing?')){

const INVESTMENT_YEARS = 20
const ANNUAL_INTEREST_RATE = 0.2

let userInvestment = parseInt(prompt('Please enter the amount that you would like to invest')!)

for(let i = 0; i < INVESTMENT_YEARS; i++){
  let profit = userInvestment * ANNUAL_INTEREST_RATE
  userInvestment += profit
}

document.write(`
<p>Total Sum : ${userInvestment}</p>
`)
}
}
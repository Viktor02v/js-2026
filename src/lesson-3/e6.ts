// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const MONDAY = 1
const TUESDAY = 2
const WEDNESDAY = 3
const THURSDAY = 4
const FRIDAY = 5
const SATURDAY = 6
const SUNDAY = 7

const dayNumber = parseInt(prompt("Please enter the number of the day of the week (1-7)")!)

switch(dayNumber){
  case MONDAY : 
  document.write(`It's Monday`)
  break

  case TUESDAY : 
  document.write(`It's Tuesday`)
  break

  case WEDNESDAY : 
  document.write(`It's Wednesday`)
  break

  case THURSDAY : 
  document.write(`It's Thursday`)
  break

  case FRIDAY : 
  document.write(`It's Friday`)
  break

  case SATURDAY : 
  document.write(`It's Saturday`)
  break

  case SUNDAY : 
  document.write(`It's Sunday`)
  break

  default:  document.write('Please enter the valid number of the day of the week (1-7)')
}
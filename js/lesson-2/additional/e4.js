//  Задача 4. З клавіатури вводиться вік дитини. 
//  Вивести на екран через скільки років вона буде відвідувати садочок,
//  піде у школу,
//  закінчить школу,
//  вступить і закінчить
const KINDERGARDEN_AGE = 3;
const START_SCHOOL_AGE = 6;
const FINISH_SCHOOL_AGE = 17;
const START_ACADEMY_AGE = 17;
const FINISH_ACADEMY_AGE = 21;

const age = Number(prompt('Enther the child age','1'))

const goToKindergarden =  KINDERGARDEN_AGE - age
const goToSchool = START_SCHOOL_AGE - age
const finishSchool = FINISH_SCHOOL_AGE - age
const startAcademy = START_ACADEMY_AGE - age
const finishAcademy = FINISH_ACADEMY_AGE - age

document.write(`
  <p>Child age : ${age}</p>
  <p>Child goes to kindergarden in: ${goToKindergarden} year(s)</p>
  <p>Child goes to the school in : ${goToSchool} year(s)</p>
  <p>Child finishes school in : ${finishSchool} year(s)</p>
  <p>Child goes to the academy in : ${startAcademy} year(s)</p>
  <p>Child finished academy in : ${finishAcademy} year(s)</p>
  `)
// Полювання. Заєць знаходиться у верхньому лівому кутку поля. 
// Поле складається з двох рядків і двох стовпців.
// За один крок заєць може стрибнути у будь-яку із вільних клітинок. 
// Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. 
// Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. 
// Якщо користувач зловить зайця за другою спробою, то одержує 50 балів. 

// const PRIZE_1 = 100
// const PRIZE_2 = 50

// const FIELD_MAX_LENGTH = 2
// const STARTING_POSITION = 1

// let bunnyPositionY = STARTING_POSITION
// let bunnyPositionX = STARTING_POSITION

// const trapPositionY = parseInt(prompt(`Please enter the position (Y), within the game field scope MIN:1, MAX:2`)!)
// const trapPositionX = parseInt(prompt(`Please enter the position (X), within the game field scope MIN:1, MAX:2`)!)

// let msg = ''

// if(trapPositionX < STARTING_POSITION && trapPositionY < STARTING_POSITION) 
//   msg = `Error, please place the trap within the game field scope <br> 
//   Column Min Length: ${STARTING_POSITION} <br>
//   Column Max Length: ${FIELD_MAX_LENGTH} <br>
//   Row Min Length: ${STARTING_POSITION} <br>
//   Row Max Length: ${FIELD_MAX_LENGTH} <br>
//   `
// else {
//   bunnyPositionX = STARTING_POSITION + Math.floor(Math.random() * FIELD_MAX_LENGTH )
//   bunnyPositionY = STARTING_POSITION + Math.floor(Math.random() * FIELD_MAX_LENGTH )
//   if ((bunnyPositionX === trapPositionX) && (bunnyPositionY === trapPositionY))
//     msg = `Congats, you've won the game within the first try, your prize is ${PRIZE_1}`
//   else 
//     bunnyPositionX = STARTING_POSITION + Math.floor(Math.random() * FIELD_MAX_LENGTH )
//     bunnyPositionY = STARTING_POSITION + Math.floor(Math.random() * FIELD_MAX_LENGTH )
//     if ((bunnyPositionX === trapPositionX) && (bunnyPositionY === trapPositionY))
//       msg = `Congats, you've won the game within the second try, your prize is ${PRIZE_2}`
//     else msg = `Sorry, you've lost`
// }

// document.write(`
//   <p>Bunny possition: Column ${bunnyPositionX}</p>
//   <p>Bunny possition: Row ${bunnyPositionY}</p>
//   <p>Trap possition: Column ${trapPositionX}</p>
//   <p>Trap possition: Row ${trapPositionY}</p>
//   <p>${msg}</p>
// `)
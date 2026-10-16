  // Задача 1. Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку.
  // Визначити ширину елементів, які повинні бути відображені у цьому рядку. 
  // Довільна ширина екрана : const viewportWidth
  // Довільна кількість елесентів у рядку : const elementsPerRow
  // обчислена ширина елементу : const elementWidth

  const viewportWidth = Number(prompt('Please enter the viewport width', '1440'))
  const elementsPerRow = parseInt(prompt('Please enter the amount of elements per row', '2'))
  const elementWidth = viewportWidth / elementsPerRow

  document.write(`
    <p>Viewport Width = ${viewportWidth}</p>
    <p>Elementes Per Row = ${elementsPerRow}</p>
    <p>Calculated Elelment Width = ${elementWidth}</p>
    `)
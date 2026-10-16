// Задача 6. Дано три дійсні змінні a, b і c.
// Скласти  алгоритм, який міняє місцями значення цих змінних наступним чином:
// змінна a набуває значення змінної b,
// змінна b набуває значення змінної c,
// а змінна  c – попереднє значення змінної a.
let a = Number(prompt('Enther the number for "a"', '1'))
let b = Number(prompt('Enther the number for "b"', '2'))
let c = Number(prompt('Enther the number for "c"', '3'))
let helper = a
a = b
b = c
c = helper

document.write(`
  <p>New "a" : ${a}</p>
  <p>New "b" : ${b}</p>
  <p>New "c" : ${c}</p>
  `)
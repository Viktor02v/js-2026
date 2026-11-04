// Відобразити трикутник за допомогою символів «о»

{
if (confirm('Start testing?')) {
  document.write('<table style="width: 100px">')
  for (let r = 0; r < 7; r++) {
    document.write('<tr>')
    document.write('<td style="text-align: center">')
    for (let c = 0; c <= r; c++) {
      document.write('o')
    }
    document.write('</td>')
    document.write('</tr>')
  }
  document.write('</table>')
}
}
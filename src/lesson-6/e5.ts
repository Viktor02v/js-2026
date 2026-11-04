// Відобразити трикутник за допомогою символів «о»

{
if (confirm('Start testing?')) {
  document.write('<table>')
  for (let r = 12; r > 0; r--) {
    if (r > 7 || r <= 2) {
      document.write('<tr><td>')
      for (let c = 0; c < r; c++) {
        document.write('o')
      }
      document.write('</td></tr>')
    } 
    else if (r === 7) {
      document.write('<tr><td>...</td></tr>')
    }
  }
  document.write('</table>')
}
}
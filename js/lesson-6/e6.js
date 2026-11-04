"use strict";
// Відобразити трикутник за допомогою символів «о»
{
    if (confirm('Start testing?')) {
        document.write('<table style="width: 100px">');
        for (let r = 12; r > 0; r--) {
            if (r > 7 || r <= 2) {
                document.write('<tr><td style="text-align: center">');
                for (let c = 0; c < r; c++) {
                    document.write('o');
                }
                document.write('</td></tr>');
            }
            else if (r === 7) {
                document.write('<tr><td style="text-align: center">...</td></tr>');
            }
        }
        document.write('</table>');
    }
}
//# sourceMappingURL=e6.js.map
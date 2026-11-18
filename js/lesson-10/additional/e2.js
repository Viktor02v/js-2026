"use strict";
// Заповнити масив нулями та одиницями,
// при цьому дані значення чергуються,
// починаючи з нуля.
{
    const arrLength = parseInt(prompt('Please enter the number that gonna represent the length of the array'));
    const arr = Array.from({ length: arrLength }, (_, index) => {
        if (index % 2 === 0)
            return 0;
        else
            return 1;
    });
    document.write(`
    <p>${arr}</p>
    `);
}
//# sourceMappingURL=e2.js.map
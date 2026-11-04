"use strict";
// Створити функцію, яка виводить банер 
// (у функцію передаються: зображення, заголовок та посилання,
// куди переходимо при кліку на зображення 
// (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
{
    if (confirm('Start testing ?')) {
        const IMG_SRC = '../../public/seven.png';
        const SOME_LINK = 'https://google.com';
        let banner = function (imgSrc, title = 'Default', link) {
            if (!imgSrc || !link)
                throw new Error();
            return document.write(`
      <p><a href="${link}">
      <h1>${title}</h1>
      <img src="${imgSrc}">
      </a></p>
    `);
        };
        const title = prompt('Please enter the title for the banner!');
        banner(IMG_SRC, title, SOME_LINK);
    }
}
//# sourceMappingURL=e9.js.map
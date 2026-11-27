//  Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
// * прізвище спонсора
// * ім’я  спонсора
// * сума вкладень спонсора
// рік випуску
// вартість сайту

// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

{
  if (confirm('Start testing ?')) {
    const webs = [
      {
        currentCompanyName: 'Novitnie',
        companyOwner: 'Ivan Novitniy',
        sponsors: [
          { surname: 'Velosepedov', name: 'Vladyslav', investmentSum: 100000 },
          { surname: 'Polianyk', name: 'Andriy', investmentSum: 120000 },
          { surname: 'Sevedov', name: 'Roman', investmentSum: 180000 },
        ],
        releaseYear: '2009',
        webPrice: 4000,
      },
      {
        currentCompanyName: 'TechNova',
        companyOwner: 'Oleksandr Kovalenko',
        sponsors: [
          { surname: 'Shevchenko', name: 'Dmytro', investmentSum: 150000 },
          { surname: 'Bondarenko', name: 'Olena', investmentSum: 90000 },
          { surname: 'Melnyk', name: 'Taras', investmentSum: 210000 },
        ],
        releaseYear: '2020',
        webPrice: 5500,
      },
      {
        currentCompanyName: 'WebCraft',
        companyOwner: 'Maksym Petrenko',
        sponsors: [
          { surname: 'Tkachenko', name: 'Ihor', investmentSum: 80000 },
          { surname: 'Kravchenko', name: 'Anna', investmentSum: 140000 },
          { surname: 'Lysenko', name: 'Serhiy', investmentSum: 110000 },
        ],
        releaseYear: '2021',
        webPrice: 3200,
      },
      {
        currentCompanyName: 'DigitalWave',
        companyOwner: 'Andriy Marchenko',
        sponsors: [
          { surname: 'Savchenko', name: 'Mykhailo', investmentSum: 175000 },
          { surname: 'Romanenko', name: 'Kateryna', investmentSum: 125000 },
          { surname: 'Koval', name: 'Viktor', investmentSum: 95000 },
        ],
        releaseYear: '2018',
        webPrice: 6200,
      },
      {
        currentCompanyName: 'CodeSphere',
        companyOwner: 'Danylo Hrytsenko',
        sponsors: [
          { surname: 'Moroz', name: 'Pavlo', investmentSum: 130000 },
          { surname: 'Polishchuk', name: 'Maria', investmentSum: 160000 },
          { surname: 'Kozak', name: 'Bohdan', investmentSum: 100000 },
        ],
        releaseYear: '2022',
        webPrice: 13000,
      },
      {
        currentCompanyName: 'PixelForge',
        companyOwner: 'Artem Bondar',
        sponsors: [
          { surname: 'Danyliuk', name: 'Yurii', investmentSum: 115000 },
          { surname: 'Oliinyk', name: 'Natalia', investmentSum: 190000 },
          { surname: 'Zakharchuk', name: 'Roman', investmentSum: 85000 },
        ],
        releaseYear: '2023',
        webPrice: 11000,
      },
    ]

    console.log(webs)

    // 1) загальну вартість усіх сайтів
    const totalWebsPrice = webs.reduce(
      (prev, current) => prev + current.webPrice,
      0,
    )
    document.write(`<p>Total Webs Price : ${totalWebsPrice}<p>`)

    // 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
    const twoThousandsWebsCount = webs.reduce(
      (prev, current) =>
        current.releaseYear >= '2000' && current.releaseYear <= '2009'
          ? ++prev
          : prev,
      0,
    )
    document.write(
      `<p>Webs created within 2000 - 2009 : ${twoThousandsWebsCount}<p>`,
    )

    // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
    const moreThenHundredThousandsInvestmentCount = webs.reduce(
      (prev, current) => {
        let investmentSum = current.sponsors.reduce(
          (prev, current) => prev + current.investmentSum,
          0,
        )
        if (investmentSum > 100000) {
          prev++
        }
        return prev
      },
      0,
    )

    document.write(
      `<p>Webs count which investemnt sum is larger then 100000  : ${moreThenHundredThousandsInvestmentCount}<p>`,
    )

    // 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
    const arrOfSponsors = webs.reduce((prev, current) => {
      prev.push(...current.sponsors)
      return prev
    }, [])

    // document.write(`<p>Sponsors Array  : ${arrOfSponsors}<p>`)
    console.table(arrOfSponsors)

    // 5) знайти рік, коли прибуток був найбільшим
    const theMostProfitableYear = webs.reduce((prev, current) => {
      if (prev.webPrice < current.webPrice) prev = current
      return prev
    }).releaseYear

    document.write(`<p>The most profitable year  : ${theMostProfitableYear}<p>`)

    // 6) упорядкувати список за спаданням прибутку
    webs.sort((a, b) => b.webPrice - a.webPrice)
    console.table(webs)

    // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
    const moreThenTenThousandsPrice = webs.filter((el) => el.webPrice >= 10000)
    const lessThenTenThousandsPrice = webs.filter((el) => el.webPrice < 10000)

    console.table(moreThenTenThousandsPrice)
    console.table(lessThenTenThousandsPrice)
  }
}

// Дано послідовність цін товарів та назв (у окремих масивах).
// Вивести на екран ті, які може собі дозволити користувач
// (кількість грошей задається).

{
  if (confirm('Start testing ?')) {
    const userMoney = parseInt(prompt('Please enter the amount of money')!)

    const availableProducts = function getAvailableProducts(
      userMoney: number,
    ): string[] {
      let availableProducts = []
      const productsTitles = [
        'cheese',
        'juice',
        'bread',
        'oats',
        'milk',
        'eggs',
      ]
      const productsPrices = [1000, 20, 31, 40, 35, 80]

      if (productsTitles.length !== productsPrices.length)
        throw new Error('Smth went wrong!')

      for (let i = 0; i < productsPrices.length; i++) {
        if (productsPrices[i]! <= userMoney) {
          availableProducts.push(productsTitles[i]!)
        }
      }

      return availableProducts
    }

    document.write(`
      <p>Available Products : ${availableProducts(userMoney).join(', ')}</p>
      `)
  }
}

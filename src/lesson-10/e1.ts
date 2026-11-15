// Exercise 10

{
  const MIN = 1
  const MAX = 10000

  const pricesNumber = parseInt(
    prompt('Please enter the amount of prices you want to generate')!,
  )

  function generateRandomNumber(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  const prices = Array.from({ length: pricesNumber }, () =>
    generateRandomNumber(MIN, MAX),
  )

  const moreThenThousand = prices.filter((el) => el > 1000)

  const moreThenThousandIndexes = prices.reduce<number[]>(
    (acc, current, index) => {
      if (current > 1000) acc.push(index)
      return acc
    },
    [],
  )

  const moreThenPreviousValue = prices.filter((el, index, arr) => {
    const previous = arr[index - 1]!
    if (el > previous) return el
  })

  const maxPrice = prices.reduce((acc, current) => {
    if (acc < current) acc = current
    return acc
  })

  const valuesInPercents = prices.map((el) =>
    Number(((el / maxPrice) * 100).toFixed(2)),
  )

  const priceChangesCount = prices.reduce((acc, current, index, arr) => {
    if (index !== 0 && arr[index - 1] !== current) acc++
    return acc
  }, 0)

  const isPriceLessThanThousand = prices.some((el) => el < 1000)

  const arePricesMoreThenThousand = prices.every((el) => el > 1000)

  const countOfNumbersMoreThenThousand = prices.reduce((acc, current) => {
    if (current > 1000) acc++
    return acc
  }, 0)

  const totalOfPricesMoreThenThousand = prices.reduce((acc, current) => {
    if (current > 1000) acc += current
    return acc
  })

  const firstPriceMoreThenThousand = prices.find((el) => el > 1000)

  const firstIndexPriceMoreThenThousand = prices.findIndex((el) => el > 1000)

  const lastPriceMoreThenThousand = prices.findLast((el) => el > 1000)

  const lastIndexPriceMoreThenThousand = prices.findLastIndex((el) => el > 1000)

  document.write(`
      <p>Prices : ${prices}</p>
      <p>1. ${moreThenThousand}</p>
      <p>2. ${moreThenThousandIndexes}</p>
      <p>3. ${moreThenPreviousValue}</p>
      <p>4. ${valuesInPercents}, ${maxPrice}</p>
      <p>5. ${priceChangesCount}</p>
      <p>6. ${isPriceLessThanThousand}</p>
      <p>7. ${arePricesMoreThenThousand}</p>
      <p>8. ${countOfNumbersMoreThenThousand}</p>
      <p>9. ${totalOfPricesMoreThenThousand}</p>
      <p>10. ${firstPriceMoreThenThousand}</p>
      <p>11. ${firstIndexPriceMoreThenThousand}</p>
      <p>12. ${lastPriceMoreThenThousand}</p>
      <p>13. ${lastIndexPriceMoreThenThousand}</p>
      `)
}

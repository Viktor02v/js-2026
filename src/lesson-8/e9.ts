// Морський бій.
// Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів.
// Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці
// (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель.
// Користувач вводить номер клітинки, куди стріляє.
// Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

{
  if (confirm('Start testing ?')) {
    const MIN_POSITION = 0
    const FIELD = 0
    const SHIP = 1
    const MIN_FIELD_LENGTH = 5

    const fieldLenth = parseInt(
      prompt(
        `Please enter the lenth of the game field, min field length: ${MIN_FIELD_LENGTH}`,
      )!,
    )

    const shipsAmount = parseInt(
      prompt(
        `Please enter the amount of ships, make sure that it's less then the field width: ${fieldLenth}`,
      )!,
    )

    const gameField = generateGameField(fieldLenth, FIELD)

    function generateRandomNumber(min: number, max: number): number {
      return min + Math.floor(Math.random() * (max - min + 1))
    }

    function generateGameField(
      fieldLenth: number,
      numberForField: number,
    ): number[] {
      let arr = new Array(fieldLenth)
      for (let i = 0; i < fieldLenth; i++) {
        arr[i]! = numberForField
      }
      return arr
    }

    function injectShips(
      gameField: number[],
      shipsAmount: number,
      minPosition: number,
      numberForShip: number,
    ): void {
      for (let i = 0; i < shipsAmount; i++) {
        let fieldIndex = generateRandomNumber(minPosition, gameField.length - 1)
        while (gameField[fieldIndex]! === numberForShip) {
          let newFieldIndex = generateRandomNumber(
            minPosition,
            gameField.length - 1,
          )
          fieldIndex = newFieldIndex
        }
        gameField[fieldIndex]! = numberForShip
      }
    }

    function checkUserShot(
      gameField: number[],
      shotPositions: number[],
      userShot: number,
      userShotIndex: number,
      numberForShip: number,
    ): { isAlreadyShotPosition: boolean; wasHit: boolean } {
      let isAlreadyShotPosition = false
      let wasHit = false

      for (let i = 0; i < shotPositions.length; i++) {
        if (shotPositions[i] === userShot) {
          isAlreadyShotPosition = true
          break
        }
      }

      if (!isAlreadyShotPosition) {
        shotPositions.push(userShot)
        wasHit = checkForHitShip(
          gameField,
          userShotIndex,
          numberForShip,
          userShot,
        )
      }

      return { isAlreadyShotPosition, wasHit }
    }

    function checkForHitShip(
      gameField: number[],
      userShotIndex: number,
      numberForShip: number,
      userShot: number,
    ): boolean {
      let wasHit = false
      if (gameField[userShotIndex] === numberForShip) {
        wasHit = true
        alert(`Congrats, you've shot the ship on position: ${userShot}`)
      }
      return wasHit
    }

    function validateUserShotNumber(
      userShot: number,
      fieldLenth: number,
    ): boolean {
      let isUserNumberValid = false
      if (userShot < 1 || userShot > fieldLenth || Number.isNaN(userShot))
        alert(
          `Please make sure that you enter valid number from 1 - ${fieldLenth}`,
        )
      else isUserNumberValid = true
      return isUserNumberValid
    }

    function playGame(
      gameField: number[],
      shipsAmount: number,
      minPosition: number,
      numberForShip: number,
      fieldLenth: number,
    ): number[] {
      // Injects ships at random field positions
      injectShips(gameField, shipsAmount, minPosition, numberForShip)
      let shotPositions: number[] = []
      let shotShipsAmount = 0
      // Cycle that runs till user shots all ships // do{}while() gecause it's gonna run for at least once
      main: do {
        let userShot = parseInt(
          prompt(
            shotPositions.length === 0
              ? 'Please enter the cell you want to shoot at:'
              : `Please enter the cell you want to shoot at, 
              make sure that it's not already in the shot positions list: ${shotPositions}`,
          )!,
        )
        // Check if user's shot number is valid
        // (if not valid: throw alert(), and skip to the next itteration)
        if (!validateUserShotNumber(userShot, fieldLenth)) continue
        // Converted to the array index number
        let userShotIndex = userShot - 1
        // Returns two booleans (
        // 1.isAlreadyShotPosition - Checks whether userShot is not in already shot positions list;
        // 2.wasHit - Checks if userShot have shot the ship (if not isAlreadyShotPosition))
        // Pushes userShot value to the shotPositions arr
        const { isAlreadyShotPosition, wasHit } = checkUserShot(
          gameField,
          shotPositions,
          userShot,
          userShotIndex,
          numberForShip,
        )

        // If userNumber already exists in shotPositions[] show allert and skip the current (main) itteration
        if (isAlreadyShotPosition) {
          alert(`Please make sure that the place you're <br>
          shoting is not already in the shot cells list: ${shotPositions.join(' ,')}`)
          continue main
        }

        // Increase shotShipsAmount number is wasHit from checkUserShot() <= checkForHitShip() returns true
        if (wasHit) shotShipsAmount++
      } while (shotShipsAmount < shipsAmount)

      return shotPositions
    }

    const shotPositions = playGame(
      gameField,
      shipsAmount,
      MIN_POSITION,
      SHIP,
      fieldLenth,
    )

    document.write(`
      <p>Game field: ${gameField}</p>
      <p>Ships Amount: ${shipsAmount}</p>
      <p>Shot positions: ${shotPositions}</p>
      `)
  }
}

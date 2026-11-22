"use strict";
// ----------------------------------------------------------------------------------------------------------
// Морський бій.
// ----------------------------------------------------------------------------------------------------------
// Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів.
// Користувач стріляє вказуючи координати.
// Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
// ----------------------------------------------------------------------------------------------------------
{
    // if (confirm('Start testing ?')) {
    const FIELD_LENGTH = 6;
    const SHIPS = 5;
    const USER_SHOTS = 5;
    // Filling matrix arr with values
    function fillRowsWithCols(colsNumber) {
        return Array.from({ length: colsNumber }, () => 0);
    }
    // Generating matrix
    function generateMatrix(rowsNumber, colsNumber) {
        return Array.from({ length: rowsNumber }, () => fillRowsWithCols(colsNumber));
    }
    // Generating random number
    function generateRandomNumber(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    // Injecting ships into a game field
    function injectShips(gameField, shipsNumber) {
        let rowEnd = gameField.length - 1;
        let colEnd = gameField[0]?.length - 1;
        let isAlreadyTaken = false;
        for (let i = 0; i < shipsNumber; i++) {
            let randomRowIndex = generateRandomNumber(0, rowEnd);
            let randomColIndex = generateRandomNumber(0, colEnd);
            if (gameField[randomRowIndex][randomColIndex] === 1)
                isAlreadyTaken = true;
            while (isAlreadyTaken) {
                randomRowIndex = generateRandomNumber(0, rowEnd);
                randomColIndex = generateRandomNumber(0, colEnd);
                if (gameField[randomRowIndex][randomColIndex] !== 1)
                    isAlreadyTaken = false;
            }
            gameField[randomRowIndex][randomColIndex] = 1;
        }
    }
    // Generate game field
    function generateGameField(rowsNumber, colsNumber, shipsNumber) {
        // Generates field
        const generatedField = generateMatrix(rowsNumber, colsNumber);
        // Injects ships
        injectShips(generatedField, shipsNumber);
        return generatedField;
    }
    const gameField = generateGameField(FIELD_LENGTH, FIELD_LENGTH, SHIPS);
    function checkUserShot(rowIndex, colIndex, usedCombinations) {
        let wrongCoordinates = false;
        let sameCombination = false;
        // Check for wrong coordinates
        if (rowIndex > 5 || rowIndex < 0 || colIndex > 5 || colIndex < 0)
            wrongCoordinates = true;
        // Check if the combination is already used
        if (usedCombinations.some((el) => el[0] === rowIndex && el[1] === colIndex))
            sameCombination = true;
        return { wrongCoordinates, sameCombination };
    }
    // Check whether win or lost
    function checkWin(shotShipsCount, shipsCount) {
        if (shotShipsCount === shipsCount)
            alert(`Congrats, you've won, start a new game!`);
        else
            alert(`You've lost, better luck next time`);
    }
    function playGame(gameField, attempts, shipsCount) {
        if (!gameField)
            throw new Error('Smth went wrong!');
        let usedAttempts = 0;
        let shotShipsCount = 0;
        let usedCombinations = [];
        do {
            let userRow = parseInt(prompt(`Please enter a row number you want to hit (from 1 - 6)`));
            let userCol = parseInt(prompt(`
          ${usedAttempts === 0 ? `Please enter a col number you want to hit in row : ${userRow} (from 1 - 6)` : `Please enter a col number you want to hit in row : ${userRow} (from 1 - 6)`}`));
            const rowShotIndex = userRow - 1;
            const colShotIndex = userCol - 1;
            const { wrongCoordinates, sameCombination } = checkUserShot(rowShotIndex, colShotIndex, usedCombinations);
            if (wrongCoordinates) {
                alert('Please enter a correct number (1-6)');
                continue;
            }
            if (sameCombination) {
                alert(`You can't shoot the same place twice, please select other cell`);
                continue;
            }
            usedCombinations.push([rowShotIndex, colShotIndex]);
            usedAttempts += 1;
            let isHit = gameField[rowShotIndex][colShotIndex] === 1;
            if (isHit) {
                shotShipsCount++;
                alert(`You've shot the ship on a position: row ${userRow} - col ${userCol}, keep up!`);
            }
            else if (usedAttempts === attempts)
                alert(`It was your last shot!`);
            else
                alert(`Missed, try again, you still have ${attempts - usedAttempts}`);
        } while (shotShipsCount !== shipsCount && usedAttempts !== attempts);
        checkWin(shotShipsCount, shipsCount);
        console.log(usedCombinations);
    }
    playGame(gameField, USER_SHOTS, SHIPS);
    console.log(gameField);
    // }
}
//# sourceMappingURL=e3.js.map
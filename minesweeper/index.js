const utils = require('../lib/utils')
const paddings = [-1, 0, 1]

const minesweeper = {
  createGame (rowCount = 3, cellCount = 5, mineCount = 2) {
    const map = minesweeper.createMap(rowCount, cellCount, mineCount)
    const mines = utils.range(mineCount).map((mine, index, arr) => {
      mine = minesweeper.generateMine(rowCount, cellCount)
      while (arr.includes(mine)) {
        mine = minesweeper.generateMine(rowCount, cellCount)
      }
      return mine
    })
    mines.forEach(mine => {
      minesweeper.setMine(mine, map)
      minesweeper.fillSurroundings(mine, map)
    })
    return map
  },
  createMap (rowCount = 3, cellCount = 5, mineCount = 2) {
    return utils.range(rowCount).map(() => minesweeper.createRow(cellCount))
  },
  createRow (cellCount) {
    return utils.range(cellCount).fill(0)
  },
  generateMine (rowCount, cellCount) {
    return [
      utils.getRandomIntInclusive(0, rowCount - 1),
      utils.getRandomIntInclusive(0, cellCount - 1)
    ]
  },
  setMine ([rowIndex, cellIndex], map) {
    map[rowIndex][cellIndex] = '*'
  },
  fillSurroundings ([rowIndex, cellIndex], map) {
    paddings.forEach(padding => {
      minesweeper.fillRow(paddings, map[rowIndex + padding], cellIndex)
    })
  },
  fillRow (paddings, row, cellIndex) {
    if (!row) {
      return
    }
    paddings.forEach(padding => {
      if (Number.isInteger(row[cellIndex + padding])) {
        row[cellIndex + padding] += 1
      }
    })
  }
}

module.exports = minesweeper

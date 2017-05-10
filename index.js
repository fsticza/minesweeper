const minesweeper = require('./minesweeper')

const game = minesweeper.createGame()

game.forEach(row => {
  console.log(row)
})

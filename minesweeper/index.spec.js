/* global describe, it */
const expect = require('chai').expect
const minesweeper = require('./')

describe('minesweeper', () => {
  const game = minesweeper.createGame()
  console.log(game)
  describe('.createGame()', () => {
    it('default game should have 3 rows', () => {
      expect(game).to.have.lengthOf(3)
    })
    it('default game should have 5 cells', () => {
      expect(game[0]).to.have.lengthOf(5)
    })
  })
  // describe('.fillSurroundings(mine, map)', () => {
  //
  // })
})

// create a function that will check the current situation of the game tic tac toe
// Assume that the board comes in the form of a 3x3 array,
// where the value is 0 if a spot is empty,
// 1 if it is an "X",
// or 2 if it is an "O", like so:
// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:
// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    if (!board[i].includes(0)) {
      if (board[i].reduce((acc, crr) => acc + crr, 0) === 3) {
        return 1;
      } else if (board[i].reduce((acc, crr) => acc + crr, 0) === 6) {
        return 2;
      }
    }
  }
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] > 0) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return board[0][i];
      }
    }
  }
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] > 0) {
      if (
        board[0][i] === board[1][i + 1] &&
        board[1][i + 1] === board[2][i + 2]
      ) {
        return board[0][i];
      }
    }
  }
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] > 0) {
      if (
        board[0][i] === board[1][i - 1] &&
        board[1][i - 1] === board[2][i - 2]
      ) {
        return board[0][i];
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes(0)) {
      return -1;
    }
  }
  return 0;
}

console.log(isSolved([[0, 0, 1],[0, 1, 2],[2, 1, 0]])); // -1
console.log(isSolved([[1, 1, 1],[0, 1, 2],[2, 1, 0]])); // 1
console.log(isSolved([[2, 0, 1],[2, 1, 2],[2, 1, 0]])); // 2
console.log(isSolved([[1, 0, 1],[0, 1, 2],[2, 1, 1]])); // 1
console.log(isSolved([[2, 1, 1],[1, 1, 2],[2, 2, 1]])); // 0


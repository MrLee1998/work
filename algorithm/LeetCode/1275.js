// [0, 0] [0, 1] [0,2]
// [1, 0] [1, 1] [1,2]
// [2, 0] [2, 1] [2,2]
var tictactoe = function (moves) {
  const winList = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];
  let grid = new Array(9)
  for(let i = 0; i < moves.length; i++) {
    let [x, y] = moves[i]
    let role = i % 2 ? 'B' : 'A'
    grid[x*3 + y] = role
  }
  for(let winItem of winList) {
    let role = grid[winItem[0]]
    if(role) {
      if(role == grid[winItem[1]] && role == grid[winItem[2]]) {
        return role
      }
    }
  }
  return moves.length === 9 ? "Draw" : 'Pending'
};
let moves = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]];
console.log(tictactoe(moves));
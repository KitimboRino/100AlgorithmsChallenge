export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8 };

  // parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN
  const cell1X = board[cell1[0]];
  const cell1Y = parseInt(cell1[1]);

  const cell2X = board[cell2[0]];
  const cell2Y = parseInt(cell2[1]);

  return (cell1X + cell2Y) % 2 === (cell2X + cell2Y) % 2;
}
console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));

// Test
// test('chess Board cell Color',() => {
//   expect(chessBoardCellColor('A1','C3')).toEqual(false)
//   expect(chessBoardCellColor('A1','H3')).toEqual(true)
// });

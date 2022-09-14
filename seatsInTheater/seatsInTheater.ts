export function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
 //Since we are including this column in the area, add it back into the equation.
 return (nCols - col + 1) * (nRows - row);
}

console.log(seatsInTheater(16, 11, 5, 3));
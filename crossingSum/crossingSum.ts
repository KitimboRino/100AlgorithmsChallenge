export function crossingSum(matrix: number[][], a: number, b: number): number {
    let rowSum = matrix[a].reduce((a, b) => a + b)
    let columnSum = 0
    for (let index = 0; index < matrix.length;
        index++) {
        columnSum += index !== a ? matrix[index][b] : 0
    }
    return rowSum + columnSum
}

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));

// Test
// test('crossing Sum', () =>{
//     expect(crossingSum([[1, 1, 1, 1],
//         [2, 2, 2, 2],
//         [3, 3, 3, 3]], 1, 3)).toEqual(12)
// });
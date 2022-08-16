export function matrixElementsSum(matrix: any[][]): number {
    let sum = 0;
    
    /* Iterating through the first array in the matrix. */
    for (let i = 0; i < matrix[0].length; i++) {
        
        /* Iterating through the second array in the matrix. */
        for (let j = 0; j < matrix.length; j++) {
            
           /* Checking if the value is 0, if it is, it breaks out of the loop. */
            if (matrix[j][i] === 0) {
                break;
            }
            
           /* Adding the value of the matrix to the sum variable. */
            sum += +matrix[j][i];
        }
    }
    return sum;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));

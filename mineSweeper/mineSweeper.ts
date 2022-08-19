export function minesweeper(matrix: boolean[][]): number[][] {
    let mineCount: number[][] = [];
    for (let i = 0; i < matrix.length; i++) {
        mineCount.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            mineCount[i][j] = 0;

            // above
            /* Checking if the value to the left of the current value is true. If it is, it adds 1 to
            the current value. */
            if (matrix[i][j - 1] === true) {
                mineCount[i][j]++;
            }

            // below
            /* Checking if the value to the right of the current value is true. If it is, it adds 1 to
            the current value. */
            if (matrix[i][j + 1] != undefined) {
                if (matrix[i][j + 1] === true) {
                    mineCount[i][j]++;
                }
            }

            // left
            /* Checking if the value to the left of the current value is true. If it is, it adds 1 to the
            current value. */
            if (matrix[i - 1] != undefined) {
                if (matrix[i - 1][j] === true) {
                    mineCount[i][j]++;
                }
            }

            // right
            /* Checking if the value to the right of the current value is true. If it is, it adds 1 to
            the current value. */
            if (matrix[i + 1] != undefined) {
                if (matrix[i + 1][j] === true) {
                    mineCount[i][j]++;
                }
            }

            // down right
            /* Checking if the value to the right of the current value is true. If it is, it adds 1 to
            the current value. */
            if (matrix[i + 1] != undefined) {
                if (matrix[i + 1][j + 1] === true) {
                    mineCount[i][j]++;
                }
            }

            /* Checking if the value to the left of the current value is true. If it is, it adds 1 to the
            current value. */
            // down left
            if (matrix[i + 1] !== undefined) {
                if (matrix[i + 1][j - 1] === true) {
                    mineCount[i][j]++;
                }
            }

            // top right
            /* Checking if the value to the right of the current value is true. If it is, it adds 1 to the
            current value. */
            if (matrix[i - 1] != undefined) {
                if (matrix[i - 1][j + 1] === true) {
                    mineCount[i][j]++;
                }
            }
            
            // top left
            /* Checking if the value to the left of the current value is true. If it is, it adds 1 to the
            current value. */
            if (matrix[i - 1] != undefined) {
                if (matrix[i - 1][j - 1] === true) {
                    mineCount[i][j]++;
                }
            }
        }
    }
    return mineCount;
}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));
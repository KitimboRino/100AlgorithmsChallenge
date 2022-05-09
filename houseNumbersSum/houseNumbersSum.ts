export function houseNumbersSum(inputArray: number[]): number {
    let total = 0;

    /* A for loop that is iterating through the array. If the value is 0, it will return the total. If
    the value is not 0, it will add the value to the total. */

    // When 0 is spotted, the program will stop iterating.
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 0) {
            return total;
        }
        total += inputArray[i];
    }
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
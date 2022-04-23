export function digitDegree(n: number): number {
    let count = 0;
    let currentNumber = n;

    if (n < 9) {
        return count;
    } else {
        while (true) {
            count++;
            currentNumber = getDigit(currentNumber);
            if (currentNumber < 9) {
                // The break statement terminates the current loop, switch , or label statement and transfers program control to the statement following the terminated statement
                break;
            }
        }
    }
    return count;
}
function getDigit(num) {
    const nums = num.toString().split('').map((element) => parseInt(element));

    // The reduce() method executes a reducer function for array element
    return nums.reduce((a, b) => { return a + b });
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
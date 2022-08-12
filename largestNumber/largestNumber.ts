export function largestNumber(n: number): number {
    /* Taking the number 10 to the power of n and subtracting 1 from it. */
    return Math.pow(10, n) - 1;
}

console.log(largestNumber(2));
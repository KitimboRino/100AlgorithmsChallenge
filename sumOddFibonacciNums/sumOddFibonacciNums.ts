export function sumOddFibonacciNums(num: number): number {
 
    const fib: number[] = [];
    let a: number = 1;
    let b: number = 1;

    /* Pushing the first number in the Fibonacci sequence to the array. */
    fib.push(a);

    /* Generating the Fibonacci sequence. */
    while (b < num) {
        fib.push(b);
        let temp: number = a;
        a = b;
        b = temp + a;
    }

    /* Declaring a variable called `sum` and setting it to 0. */
    let sum: number = 0;

    /* Iterating through the array and adding the odd numbers to the `sum` variable. */
    fib.forEach(element => sum += element % 2 !== 0 ? element : 0)
    return sum;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
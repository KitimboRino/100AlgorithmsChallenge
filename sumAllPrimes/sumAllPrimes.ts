/**
 * It loops through the numbers from 2 to num and checks if they are prime. If they are prime, it adds
 * them to the sum
 * @param {number} num - The number that the function will check up to.
 * @returns The sum of all the prime numbers from 2 to the given number.
 */
export function sumAllPrimes(num: number): number {
    let sum: number = 0;
  
    /* Looping through the numbers from 2 to num and checking if they are prime. If they are prime, it
    adds them to the sum. */
    for (let i: number = 2; i < num; i++) {
        let isPrime: boolean = checkPrimes(i);
        if (isPrime) {
            sum += i
        }
    }
    return sum;
}

/**
 * It checks if a number is prime or not.
 * @param {number} number - number - The number to check if it's prime or not.
 * @returns A boolean value.
 */
function checkPrimes(number: number): boolean {
    /* It's checking if the number is prime or not. */
    for (let i: number = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
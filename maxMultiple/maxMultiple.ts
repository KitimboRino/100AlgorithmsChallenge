export function maxMultiple(divisor: number, bound: number): number {
    let maxMultiple = 0;

   /* Looping through the numbers from 1 to the bound and checking if the number is divisible by the
   divisor. If it is, it sets the maxMultiple to that number. */
    for (let i = 1; i <= bound; i++) {
        if (i % divisor === 0) {
            maxMultiple = i;
        }
    }
    
    return maxMultiple;
}

console.log(maxMultiple(3,10));
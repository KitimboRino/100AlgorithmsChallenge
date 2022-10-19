export function sumOfTwo(a: number[], b: number[], c: number): boolean {
    
    /* Looping through the first array. */
    for (let i: number = 0; i < a.length; i++) {
        
      /* Checking if the sum of any two numbers in the two arrays is equal to the third argument. */
        for (let j: number = 0; j < b.length; j++) {
            if (a[i] + b[j] === c) {
                return true;
            }
        }
    }
    return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
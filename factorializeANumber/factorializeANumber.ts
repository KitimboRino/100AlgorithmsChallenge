export function factorializeANumber(num: number): number {
    let total = 1;

    // Loop through the number
    // for (let i = 1; i <= num; i++) {
    //     total *= i;
    // }

    // return total;

    // Alternatively
    if(num === 1) {
        return 1;
    }
    return num * factorializeANumber(num - 1);
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));

// Test
// test('factorialize A Number',() => {
//     expect(factorialANumber(5)).toBe(120)
// })
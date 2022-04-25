export function evenDigitsOnly(n: number): boolean {
    const digits = n.toString().split('');

    return digits.every(digit => parseInt(digit) % 2 === 0);
}

// Test
// test('even Digits Only', () => {
//     expect(evenDigitsOnly(248622)).toEqual(true)
//     expect(evenDigitsOnly(642386)).toEqual(false)
//   });

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
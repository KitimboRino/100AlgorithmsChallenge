export function fermactor(n: number): number[] {
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < i; j++) {
            const sum = Math.pow(i, 2) - Math.pow(j, 2);
            if (n === sum) {
                return [i, j]
            }
        }
    }
}

console.log(fermactor(15));

// Test
// test('fermafactor', () => {
//     expect(fermafactor(15)).toEqual([4,1])
//   });
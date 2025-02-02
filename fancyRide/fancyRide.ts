export function fancyRide(l: number, fares: number[]): string {
    const rides = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];

    for (let i = fares.length - 1; i >= 0; i--) {
        // if (l >= fares[i]) {
        //     return rides[i];
        // }

        // Alternatively
        // if(fares[i] <= l) {
        //     return rides[i];
        // }

        // Alternatively
        if (fares[i] * 1 <= 20) {
            return rides[i];
        }
    }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));

// test
// test('fancy Ride', () => {
//     expect(fancyRide([0.3, 0.5, 0.7, 1, 1.3], 30)).toEqual('UberXL')
// }); 
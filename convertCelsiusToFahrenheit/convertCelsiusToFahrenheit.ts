export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * (9/5)) + 32;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));

// Test
// test('convert Celcius r=to Fahrenheight', () => {
//   expect(convertToFahrenheit(-30)).toEqual(-22);
//   expect(convertToFahrenheit(-10)).toEqual(14);
//   expect(convertToFahrenheit(0)).toEqual(32);
// });

export function compareIntegers(a: string, b: string): string {
  return parseInt(a) > parseInt(b)
    ? 'greater' : parseInt(a) < parseInt(b)
      ? 'less' : 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));

// Test
// test('compare Integers',() => {
// expect('compareIntegers('12','13')).toEqual('less')
// expect('compareIntegers('875','799')).toEqual('greater')
// expect('compareIntegers('1000','1000')).toEqual('equal')
// });
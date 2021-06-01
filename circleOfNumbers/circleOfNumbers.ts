export function circleOfNumbers(n: number, firstNumber: number): number {
  const circle = [];
  const halfWay = n / 2;

  for (let index = 0; index < n; index++) {
    // The push() method adds new items to the end of an array, and returns the new length.
    circle.push(index);
  }

  if (firstNumber < halfWay) {
    return circle[firstNumber + halfWay];
  }

  return circle[firstNumber - halfWay];
}

console.log(circleOfNumbers(10, 2));

// Test
// test('circle Of Numbers', ()=>{
//   expect(circleOfNumbers(10,2)).toEqual(7)
// })

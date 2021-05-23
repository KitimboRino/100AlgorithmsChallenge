export function avoidObstacles(inputArray: number[]): number {
  inputArray = inputArray.sort((a, b) => {
    return a - b;
  });

  const largestArrayVal = inputArray[inputArray.length - 1];

  for (let index = 1; index <= largestArrayVal + 1; index++) {
    if (inputArray.every((element) => element % index !== 0)) {
      return index;
    }
  }
}
console.log(avoidObstacles([5, 3, 6, 7, 9]));


// Test
// test('avoid obstacles', ()=>{
//   expect(avoidObstacles([5,3,6,7,9]))
// })
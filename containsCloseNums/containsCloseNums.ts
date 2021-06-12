export function containsCloseNums(nums: number[], k: number): boolean {
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return Math.abs(i - j) <= k;
      }
    }
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));

// Test
// test('contains Close Nums', () => {
//   expect(containsCloseNums([0, 1, 2, 3, 5, 2], 3)).toEqual(true);
//   expect(containsCloseNums([0, 1, 2, 3, 5, 2], 2)).toEqual(true);
// });

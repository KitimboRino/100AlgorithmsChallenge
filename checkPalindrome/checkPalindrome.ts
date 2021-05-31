export function checkPalindrome(inputString: string): boolean {
  /*
  - toLowerCase() method converts a string to lowercase letters.
  - The split() method is used to split a string into an array of substrings, and returns the new array.
  - The reverse() method reverses the order of the elements in an array. Note: this method will change the original array.
  - The join() method creates and returns a new string by concatenating all of the elements in an array.

*/
  let reversed = inputString.toLowerCase().split('').reverse().join('');

  return reversed === inputString;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

// Test
// test('Case insesntive Palindrome', () => {
//   expect(checkPalindrome('AaBaa')).toEqual(true);
//   expect(checkPalindrome('abac')).toEqual(false);
// });

export function checkPalindrome(inputString: string): boolean {
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

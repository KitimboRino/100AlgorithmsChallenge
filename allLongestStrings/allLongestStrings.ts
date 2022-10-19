export function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  const longestWords = [];

  
  /* Iterating through the array and finding the longest length of the words in the array. */
  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  /* Iterating through the array and pushing the words that are the longest length to the longestWords
  array. */
  inputArray.forEach((word: string) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));

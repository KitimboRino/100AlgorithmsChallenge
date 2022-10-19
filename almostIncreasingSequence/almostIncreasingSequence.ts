export function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;


/* Checking if the sequence is a valid mountain sequence. */
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;

      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
    }
  }

  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));

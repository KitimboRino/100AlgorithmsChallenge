export function alphabeticShift(inputString: string): string {
  /* Creating an array of the alphabet. */
  const alphabet: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

 /* Splitting the string into an array of characters. */
  let inputShifted = inputString.split('');

  /* Looping through the array of characters and checking if the character is not equal to 'z'. If it
  is not equal to 'z' then it will add 1 to the index of the character in the alphabet array. If it
  is equal to 'z' then it will not add 1 to the index of the character in the alphabet array. */
  for (let i = 0; i < inputShifted.length; i++) {
    let index = 0;

    if (inputShifted[i] !== 'z') {
      index = alphabet.indexOf(inputShifted[i]) + 1;
    }

    inputShifted[i] = alphabet[index];
  }

  return inputShifted.join('');
}

console.log(alphabeticShift('crazy'));

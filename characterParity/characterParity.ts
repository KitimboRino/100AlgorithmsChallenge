export function characterParity(symbol: string): string {
  // parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN.
  const result = parseInt(symbol);

  // ? is an alternative for an if statement.
  return isNaN(result) ? 'not a number' : result % 2 === 0 ? 'Even' : 'odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));

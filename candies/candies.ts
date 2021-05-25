export function candies(n: number, m: number): number {
  // Math.floor() returns the largest integer less than or equal to a given number.

  const candy = Math.floor(m / 3);

  return candy * n;
}

console.log(candies(3, 10));

export function addTwoDigits(n: any): number {
  // Converting n to a string and splitting the string
  const nums = n.toString().split('');

  return nums.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(29));

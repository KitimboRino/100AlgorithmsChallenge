export function alternatingSums(a: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;

  //forEach() calls a provided callbackFn function once for each element in an array in ascending index order
  a.forEach((value, index) => {
    if (index % 2 == 0) {
      evenSum += value;
    } else {
      oddSum += value;
    }
  });
  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  
  inputArray.forEach((ele, index) => {
    if (ele === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  });

  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));

export function chunkyMonkey(arr: any[], size: number): any[][] {
  const nestedArray = [];

  let count = 0;

  while (count < arr.length) {
    // push() method adds one or more elements to the end of an array and returns the new length of the array.

    /*
    slice() method returns a shallow copy of a portion of an array into a new array object selected from start 
    to end (end not included) where start and end represent the index of items in that array
    */
    nestedArray.push(arr.slice(count, (count += size)));
  }
  return nestedArray;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

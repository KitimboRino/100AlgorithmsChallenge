export function addBorder(picture: string[]): any {
  // string repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called.
  const wall = '*'.repeat(picture[0].length + 2);

  // unshift inserts the given values to the beginning of an array-like object.
  picture.unshift(wall);

  // push inserts the given values to the end oof the array-like object.
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }

  return picture;
}

console.log(addBorder(['abc', 'ded']));

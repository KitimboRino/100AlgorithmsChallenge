export function confirmEnding(str: string, target: string) {
  const start = str.length - target.length;

  return str.substr(start) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));


// // Test
// test('confirm Ending', () =>{
//   expect(confirmEnding('Abstraction','action')).toEqual(true)
//   expect(confirmEnding('Open Sesame','action')).toEqual(true)
// })
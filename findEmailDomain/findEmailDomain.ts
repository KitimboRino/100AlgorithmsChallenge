export function findEmailDomain(address: string): string {
    // const lastIndex = address.lastIndexOf('@');
    // return address.slice(lastIndex + 1, address.length);

    // Alternatively (Best)
    return address.split('@').pop();
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));

// Test
// test('find Emai Domain', () => {
//     expect(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org')).toEqual('example.org')
//   });
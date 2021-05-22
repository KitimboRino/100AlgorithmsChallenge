export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft <= yourRight ? yourRight : yourLeft;

  const friendsWeakest = friendsLeft <= friendsRight ? friendsRight : friendsRight;
  const friendsStrongest = friendsLeft <= friendsRight ? friendsRight : friendsLeft;

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))

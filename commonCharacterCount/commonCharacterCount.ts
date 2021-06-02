export function commonCharacterCount(s1: string, s2: string): number {
  const s1Chars = s1.split('');
  const s2Chars = s2.split('');
  const s1CharCount = getCharList(s1Chars);
  const s2CharCount = getCharList(s2Chars);
  let total = 0;

  for(const prop in s1CharCount){
    /* hasOwnProperty() method returns a boolean indicating 
    whether the object has the specified property as its own property */
    if(s2CharCount.hasOwnProperty(prop)) {
      if(s2CharCount[prop] < s1CharCount[prop]) {
        total += s2CharCount[prop];
      }else {
        total += s1CharCount[prop];
      }
    }
  }
  return total;
}

function getCharList(chars:any){
  const wordCount ={};

  for (let i=0; i < chars.length; i++) {
    /* hasOwnProperty() method returns a boolean indicating 
    whether the object has the specified property as its own property */
    if (wordCount.hasOwnProperty(chars[i])) {
      wordCount[chars[i]]++;
    }else{
      wordCount[chars[i]]=1;
    }
  }
  return wordCount
}

console.log(commonCharacterCount('aabcc', 'adcaa'));

// Test
// test('common Character Count', () => {
//   expect(commonCharacterCount('aabcc', 'adcaa')).toEqual(3)
// });
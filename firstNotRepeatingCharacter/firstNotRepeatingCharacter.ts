export function firstNotRepeatingCharacter(s: string): string {
    const chars = s.split('');
    let duplicates = {};
    let answer = '_';
    let indexAnswer = Number.MAX_SAFE_INTEGER;

   /* Iterating through the string and creating an object with the character as the key and the value
   is an object with the count and index. */
    chars.forEach((element, index) => {
        if(!duplicates.hasOwnProperty(element)){
            duplicates[element] = {
                count:1,
                index,
            };
        }else{
            duplicates[element].count++;
            duplicates[element].index = index;
        }
    });


   /* This is iterating through the object and checking if the count is 1 and the index is less than
   the current indexAnswer. If it is, then it will set the answer to the key and the indexAnswer to
   the index. */
    for(const key in duplicates){
        if(duplicates[key].count === 1 && duplicates[key].index < indexAnswer){
            answer = key;
            indexAnswer = duplicates[key].index
        }
    }
    return answer;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));

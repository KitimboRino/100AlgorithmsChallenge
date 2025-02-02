export function stringsConstruction(a: string, b: string): number {
    /* Creating an object with the count of each letter in the string. */
    const aCount: object = getAlphabetCountts(a);
    const bCount: object = getAlphabetCountts(b);
    
    const counts: number[] = [];
    for (let char in aCount) {
        if(bCount.hasOwnProperty(char)) {
            counts.push(Math.floor(bCount[char] / aCount[char]));
        } else {
            return 0;
        }
    }

    return Math.min(...counts);

}

function getAlphabetCountts(word: string): object {
    const chars: string[] = word.split('');
    const alphabetCount: object = {};

    chars.forEach(char => {
        if(alphabetCount.hasOwnProperty(char)) {
            alphabetCount[char]++;
        } else {
            alphabetCount[char] = 1;
        }
    });
    return alphabetCount;
}
console.log(stringsConstruction('abc', 'abccba'));
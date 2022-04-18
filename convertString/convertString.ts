export function convertString(s: string, t: string): boolean {
    let word = '';
    let tindex = 0;
    const sChars = s.split(' ');

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if (word === t[tindex]) {
                word = word.concat(s[i]);
                tindex++;
                if(word === t){
                    return true;
                }
            }   
        }
    }
    return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));

export function differentSymbolsNaive(s: string): number {
    const uniqueChars = [];
    const inputChars = s.split('');

    inputChars.forEach(char => {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    });
    return uniqueChars.length;
}

console.log(differentSymbolsNaive('cabca'));

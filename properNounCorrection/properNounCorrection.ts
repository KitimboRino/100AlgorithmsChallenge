//Proper nouns always begin with a capital letter, followed by small letters.

//Correct a given proper noun so that it fits this statement.
export function properNounCorrection(noun: string): string {
    return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));
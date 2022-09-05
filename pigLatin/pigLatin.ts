export function pigLatin(str: string): string {

    /* Checking if the first letter of the string is a vowel. If it is, it returns the string with 'way'
    added to the end. */
    if (/^[aeiou]/.test(str)) return str + 'way';

    /* Checking if the first letter of the string is a consonant. If it is, it returns the string with
    the first consonant(s) moved to the end of the string and 'ay' added to the end. */
    if (/^[^aeiou]/.test(str)) return str.replace(/^([^aeiuo]?qu|[^aeiuo]+)(.+)$/, '$2$1ay');

    return str;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));

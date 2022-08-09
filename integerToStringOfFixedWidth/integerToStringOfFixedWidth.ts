export function integerToStringOfFixedWidth(number: number, width: number): string {
    /* 
    1. `let str = number + ''`: convert number to string
    2. `str.length >= width ? str.slice(-width) : '0'.repeat(width - str.length) + str`: 
        - if the length of the string is greater than or equal to the width, return the last width
    characters of the string
        - if the length of the string is less than the width, return the string with the length of
    the width by adding 0s to the front of the string 
    */
    let str = number + ''
    return str.length >= width ? str.slice(-width) : '0'.repeat(width - str.length) + str

    // Or you can use the following but still under test:
    // return number.toString().padStart(width, "0");
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

export function longestDigitsPrefix(inputString: string): string {
    let longest = "";

    /* Looping through the inputString. */
    for (let i = 0; i < inputString.length; i++) {
        
        /* Checking if the character is a number and if it is, it adds it to the longest string. If it
        is not a number, it breaks out of the loop. */
        if (inputString[i] >= "0" && inputString[i] <= "9") {
        longest += inputString[i];
        } else {
        break;
        }
    }
    return longest;
}

console.log(longestDigitsPrefix('123aa1'));
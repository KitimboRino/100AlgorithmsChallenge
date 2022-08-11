export function isTandemRepeat(inputString: string): boolean {
    
    /* Declaring a variable called `inputStringLength` and assigning it the value of the length of the
    input string. */
    let inputStringLength = inputString.length;

   /* Checking if the length of the input string is less than 2. If it is, it returns false. */
    if (inputStringLength < 2) {
        return false;
    }

   /* Taking the first half of the input string. */
    let firstHalf = inputString.substring(0, inputStringLength / 2);
    
    /* Taking the second half of the input string. */
    let secondHalf = inputString.substring(inputStringLength / 2);
    
    /* Checking if the first half of the input string is equal to the second half of the input string. */
    return firstHalf === secondHalf;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))

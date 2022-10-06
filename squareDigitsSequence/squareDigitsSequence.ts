export function squareDigitsSequence(a0: number): number {
    const already: number[] = [a0];

   /* A while loop that will keep running until it finds a number that is already in the array. */
    while(true){
       /* Taking the last number in the array and assigning it to the variable an. */
        let an: number = already[already.length-1]
       
        /* Converting the number to a string. */
        .toString()
       
        /* Splitting the string into an array of characters. */
        .split('')
       
        /* Taking each number in the array and squaring it. */
        .map(number => parseInt(number) **2)
       
        /* Taking the array of numbers and adding them together. */
        .reduce((number1, number2) => number1 + number2)

       /* Checking if the number is already in the array. If it is, it will break out of the loop. If
       it isn't, it will add it to the array. */
        if(already.includes(an)){
            break;
        }else{
            already.push(an);
        }
    }
    /* Returning the length of the array plus one. */
    return already.length + 1;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
console.log(squareDigitsSequence(24));
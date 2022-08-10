export function isLucky(n: number): boolean {
    let sum1 = 0
    let sum2 = 0
    

    let str = n.toString().split('')
    let digits = str.length
    let half = digits/2
    
    /* Looping through the digits of the number and adding the first half to sum1 and the second half
    to sum2. */
    for (let i = 0; i < digits; i++){
        if (i < half){

            sum1 += parseInt(str[i])
            //console.log(`sum1: ${sum1}`)
        }
        else {
            sum2 += parseInt(str[i])
            //console.log(`sum2: ${sum2}`)
        }
    }
    
    /* A ternary operator. It is a shorthand way of writing an if/else statement. */
    return (sum1 === sum2) ? true : false

}

console.log(isLucky(1230));
console.log(isLucky(239017));
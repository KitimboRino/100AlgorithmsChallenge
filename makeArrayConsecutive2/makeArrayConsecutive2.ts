export function makeArrayConsecutive2(statues: number[]): number {

    /* Sorting the array in ascending order. */
    let statuesArray = statues.sort((a, b) => a - b);

    let statuesCount = 0;
    let statuesDifference = 0;
    
   /* Looping through the array and subtracting the current number from the next number. Then it is
   subtracting 1 from the difference. */
    for (let i = 0; i < statuesArray.length - 1; i++) {
        statuesDifference = statuesArray[i + 1] - statuesArray[i];
        statuesCount += statuesDifference - 1;
    }
    
    return statuesCount;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
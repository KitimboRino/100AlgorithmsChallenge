export function mostFrequentDigitSum(n: number): number {
    let sequenceNumbers= {};
    let currentNumber:number = n;
    //While there are still numbers left in the sequence:
    while (currentNumber > 0) {
        //Get the sum of digits.
        let currentSequenceNumber:number = Number(String(currentNumber).split("").reduce((a, b) => Number(a) + Number(b), 0));
        //Using this sum, add this to the object map.
        if (sequenceNumbers[currentSequenceNumber]) {
            sequenceNumbers[currentSequenceNumber]++;
        } else {
            sequenceNumbers[currentSequenceNumber] = 1;
        }
        currentNumber -= currentSequenceNumber;
    }
    let mostFrequent: number = 0;
    for (let number in sequenceNumbers) {
        //Initially, assign the most frequent to the first number in the sequence map.
        if (mostFrequent === 0) {
            mostFrequent = number;
        }
        //See if this number occurs more than the last saved number.
        if (sequenceNumbers[number] > sequenceNumbers[mostFrequent]) {
            mostFrequent = number;
            //If the number of occurrences are the same yet this key is larger, replace the current most frequent with the larger key.
        } else if (sequenceNumbers[number] === sequenceNumbers[mostFrequent] && number > mostFrequent) {
            mostFrequent = number;
        }
    }

    return Number(mostFrequent);
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));
export function firstDuplicate(a: number[]): number {
    // Delacare a constant
    const firstDup = {};

    for (let num of a) {
        // Declare a constant
        if(firstDup.hasOwnProperty(num)){
            return num;
        }
        firstDup[num] = num;
    }
    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));

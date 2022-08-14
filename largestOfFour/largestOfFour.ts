export function largestOfFour(nums: number[][]): number[] {
    /* Using the spread operator to spread each array in the nums array into the Math.max function. */
    return nums.map(arr => Math.max(...arr));

    /* Using the map function to iterate through the nums array and then using the reduce function to
    iterate through each array in the nums array. */
    // return nums.map(array => array.reduce((a, b) => Math.max(a, b)));
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
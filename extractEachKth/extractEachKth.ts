export function extractEachKth(inputArray: number[], k: number): number[] {
    return inputArray.filter((ele, index) => {
        
        return (index + 1) % k !== 0;
        // Alternatively:
        // return index % k !== k - 1;
    })
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
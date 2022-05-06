export function flattenArray(arr: any[]): any[] {
    const oneArray = [];

    flatten(arr);

    /**
     * It takes an array, checks if it's an array, if it is, it calls itself on that array, if it's not,
     * it pushes it to the oneArray.
     * @param arr - The array to be flattened.
     */
    function flatten(arr) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                flatten(element);
            } else {
                oneArray.push(element);
            }
        })
    }
    return oneArray;s
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

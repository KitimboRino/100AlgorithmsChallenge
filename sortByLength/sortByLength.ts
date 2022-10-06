export function sortByLength(inputArray: string[]): string[] {
    
    return inputArray.sort((a1: string, a2: string) =>a1.length - a2.length)
}

console.log(sortByLength(["abc",
"",
"aaa",
"a",
"zz"]));
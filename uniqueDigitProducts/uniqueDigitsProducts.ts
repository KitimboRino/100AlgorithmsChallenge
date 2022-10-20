export function uniqueDigitProducts(a: number[]): number {
    const uniq: number[] = []
    a.forEach(element => {
        let num: number = element.toString().split('').map(char => parseInt(char)).reduce((a,b) => a*b);
        if(!uniq.includes(num)){
            uniq.push(num)
        }
    })
    return uniq.length
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
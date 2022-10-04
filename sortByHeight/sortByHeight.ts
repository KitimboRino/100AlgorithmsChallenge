export function sortByHeight(a: number[]): number[] {
    // Extract non -1 values
    const b: number[] = a.filter((element) => {
        if (element !== -1) {
            return element;
        }
    }).sort((a,b) => a-b);

    let inedexx: number = 0;

  // Loop through array, placing sorted values into place.
    for (let i: number=0; i<a.length; i++) {
        if (a[i] !== -1) {
            a[i] = b[inedexx];
            inedexx++;
        }
    }

    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
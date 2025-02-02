/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
*/

export function shapeArea(n: number): number {
   /* Setting the initial value of the area to 1. */
    let area = 1;

   /* Adding the area of the next square to the previous square. */
    for (let i = 1; i < n; i++) {
        area += (4 * i);
    }

    return area;
}

console.log(shapeArea(2));
console.log(shapeArea(3));
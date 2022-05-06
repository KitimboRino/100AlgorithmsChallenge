export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let days = 0;
    let totalHeight = 0;

    /* A while loop that is checking if the total height is less than the desired height. If it is, it will
    add one to the days and add the upSpeed to the totalHeight. If the totalHeight is greater than or
    equal to the desiredHeight, it will subtract the downSpeed from the totalHeight. */
    while (totalHeight < desiredHeight) {
        days++;
        totalHeight += upSpeed;

        if (totalHeight >= desiredHeight) {
            totalHeight -= downSpeed;
        }
    }
    return days;
}

console.log(growingPlant(100, 10, 910))
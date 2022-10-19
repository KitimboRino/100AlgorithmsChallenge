export function tasksTypes(deadlines: number[], day: number): number[] {
    let old: number = 0;
    let upcoming: number = 0;
    let later: number = 0;

    for (let i: number = 0; i < deadlines.length; i++) {
        if (deadlines[i] <= day) {
            old += 1;
        } else if (deadlines[i] > day + 7) {
            later += 1;
        } else {
            upcoming += 1;
        }
    }
    return [old, upcoming, later];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));

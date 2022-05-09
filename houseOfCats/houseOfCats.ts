export function houseOfCats(legs: number): number[] {
    const peopleCount = [];

  
    /* A special case for when there is only one person. */
    if (legs === 2) {
        return [1]
    }

    /* Looping through the number of legs and adding the number of people to the array. */
    while (legs >= 0) {
        peopleCount.unshift(legs / 2);
        legs -= 4;
    }

    return peopleCount;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));

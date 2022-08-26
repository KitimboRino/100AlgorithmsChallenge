export function minimalNumberOfCoins(coins: number[], price: number): number {
    let costLeft = price;

    // Looping through every coin in the array and
    let total = 0;
    for (let coin = coins.length - 1; coin >= 0; coin--) {
        
        // Find the number of this coin value that can be used, and then update the leftover price to be the remainder.
        total += Math.floor(costLeft / coins[coin]);
        costLeft %= coins[coin];

        // If this total is equal to the price, return the total. 
        if (total === price)
            return total
    }
    return total
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
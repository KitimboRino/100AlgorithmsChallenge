export function lateRide(n: number): number {
    let minutes = n % 60;
    let hours = Math.floor(n / 60);
    let sum = 0;
    
   /* Taking the hours and adding the last digit to the sum. */
    while (hours > 0) {
        sum += hours % 10;
        hours = Math.floor(hours / 10);
    }

  /* Taking the minutes and adding the last digit to the sum. */
    while (minutes > 0) {
        sum += minutes % 10;
        minutes = Math.floor(minutes / 10);
    }
    return sum;
}

console.log(lateRide(240));
console.log(lateRide(808));

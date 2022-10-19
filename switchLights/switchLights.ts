export function switchLights(a: number[]): number[] {
    
    /* Creating a new array called lights and assigning it to the value of a. */
    const lights: number[] = a;
    
    for(let i: number = 0; i < a.length; i++) {
        /* Checking if the value of the array is not equal to 0. If it is not equal to 0, it will loop
        through the array and change the value of the array to 1 if it is 0 and 0 if it is 1. */
        if(a[i] !== 0){
            for(let j: number = i; j >= 0; j--){
                lights[j] = lights[j] === 0 ? 1 : 0;
            }
        } 
    }
    return lights
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
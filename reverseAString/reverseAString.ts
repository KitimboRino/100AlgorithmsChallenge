/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
*/

export function reverseAString(str: string): string {
    //Create pointers
    let left = 0; 
    let right = str.length - 1;
    
    //Using the beginning and end pointers, iterate down to the center of the array that represents the string, and swap values.
    while(left <= right) {
        //Swap the values.
        [str[left], str[right]] = [str[right], str[left]];
        
        //Update the pointer values.
        left++;
        right--;
    }
    
    return str;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));
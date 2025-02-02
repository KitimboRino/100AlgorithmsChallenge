export function stolenLunch(note: string): string {

    /* Splitting the string into an array of characters. */
    const b: string[] = note.split('');
   
    /* A dictionary that maps the letters to numbers and vice versa. */
    const dict: object = {
        'a': '0', 'b': '1', 'c': '2', 'd': '3', 'e': '4', 'f': '5', 'g': '6', 'h': '7', 'i': '8', 'j': '9', 
        '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e', '5': 'f', '6': 'g', '7': 'h', '8': 'i', '9': 'j', 
    }
    let retChar: string = '';

    /* Iterating through the array and checking if the dictionary has the key. If it does, it will return
    the value of the key. If it doesn't, it will return the character. */
    for(let char of b) {
        retChar += dict.hasOwnProperty(char) ? dict[char] : char;
    }

    /* Returning the value of the variable `retChar`. */
    return retChar;

}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
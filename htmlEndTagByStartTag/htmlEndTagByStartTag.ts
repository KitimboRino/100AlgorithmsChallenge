export function htmlEndTagByStartTag(startTag: string): string {
    const splitString = startTag.split(' ');
    const splitTag = splitString[0].toString().split('');
    let endTag = '</';

    for (let i = 1; i < splitTag.length; i++) {
        endTag += splitTag[i];
    }

    if (endTag[endTag.length - 1] === '>') {
        endTag;
    } else {
        endTag += '>';
    }
    return endTag;

}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
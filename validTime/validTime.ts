export function validTime(time: string): boolean {
    let hour: string = time.substring(0, time.lastIndexOf(':'));

    let minutes: string = time.substring(time.lastIndexOf(':') + 1);

    return (parseInt(hour) <= 24 && parseInt(hour) >= 0) && (parseInt(minutes) < 60 && parseInt(minutes) >= 0)
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
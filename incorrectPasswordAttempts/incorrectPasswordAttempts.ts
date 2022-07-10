export function incorrectPasscodeAttempts(
    passcode: string,
    attempts: string[]
): boolean {
    let failedAttemps = 0;

    for (let attemp of attempts) {
        failedAttemps = attemp === passcode ? 0 : failedAttemps++;

        if (failedAttemps === 10) {
            return true
        }
    }
    return false

}

console.log(
    incorrectPasscodeAttempts(
        '1111', [
        "1111",
        "4444",
        "9999",
        "3333",
        "8888",
        "2222",
        "7777",
        "0000",
        "6666",
        "7285",
        "5555",
        "1111"
    ])
);
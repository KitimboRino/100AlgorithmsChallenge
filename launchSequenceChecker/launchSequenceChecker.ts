export function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
    let systemIndex = 0;
    let stepIndex = 0;
    while (systemIndex < systemNames.length && stepIndex < stepNumbers.length) {
        if (systemNames[systemIndex] === "launchSequenceChecker") {
            systemIndex++;
            stepIndex++;
        } else {
            systemIndex++;
        }
    }
    return stepIndex === stepNumbers.length;
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));
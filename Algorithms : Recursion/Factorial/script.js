// Write two functions that finds the factorial of any number. One should use recursive, other should loop.

function findFactorialIterative(number) {
    let answer = 1;
    for (let i = number; i > 1; i--) {
        answer = answer * i;
    }
    return answer;
}

function findFactorialRecursive(number) {
    // Base Case
    if (number == 2) {
        return 2;
    } 

    // Recursive calls -> We need to keep getting closer and closer until it reached the base case
    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
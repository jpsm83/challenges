// You have to write a calculator that receives strings for input.
// The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator.
// The dots and the operator will be separated by one space.
// You'll have to return a string that contains dots, as many the equation returns.
// If the result is 0, return the empty string.
// When it comes to subtraction, the first number will always be greater than or equal to the second number.

function dotCalculator (equation) {
    const separeEquation = equation.split(" ")
    const calculateEquation = eval(`${separeEquation[0].length} ${separeEquation[1]} ${separeEquation[2].length}`.replace("//", "/"))
    // return Array(calculateEquation + 1).join(".")
    return ".".repeat(calculateEquation)
}

console.log(dotCalculator("..... + ...............")) // "...................."
console.log(dotCalculator("..... - ...")) // ".."
console.log(dotCalculator("..... - .")) // "...."
console.log(dotCalculator("..... * ...")) // "..............."
console.log(dotCalculator("..... * ..")) // ".........."
console.log(dotCalculator("..... // ..")) // ".."
console.log(dotCalculator("..... // .")) // "....."
console.log(dotCalculator(". // ..")) //""
console.log(dotCalculator(".. - ..")) //""
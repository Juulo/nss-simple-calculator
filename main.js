// Calculator

// first define a function that adds two numbers (takes in two paramaters)
const addNumbers = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber;
    return sum;
}
// then define a function that subtracts two numbers (takes in two paramaters)
const subtractNumbers = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber;
    return difference;
}
// then define a function that multiplies two numbers (takes in two paramaters)
const multiplyNumbers = (firstNumber, secondNumber) => {
    const multiple = firstNumber * secondNumber;
    return multiple;
}
// then define a function that divides two numbers (takes in two paramaters)
const divideNumbers = (firstNumber, secondNumber) => {
    const remainder = firstNumber / secondNumber;
    return remainder;
}
// then defin a function that squares numbers (takes in one paramater)
const squareNumber = (yourNumber) => {
    const squared = yourNumber * yourNumber;
    return squared
}

const adding = addNumbers()
const subtracting = subtractNumbers()
const multiplying = multiplyNumbers()
const dividing = divideNumbers()
const squaring = squareNumber(260)

console.log(adding)
console.log(subtracting)
console.log(multiplying)
console.log(dividing)
console.log(squaring)
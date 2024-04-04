// QUESTION 76

// // This function adds two numbers and returns the result
// function addNumbers(num1: number, num2: number): number {
//     // Calculates the sum of num1 and num2
//     return num1 + num2;
// }

// // Calling the function with two numbers and logging the result
// console.log(addNumbers(5, 7)); // Outputs 12
// // Here, we ask our function to add 5 and 7, and it tells us the answer is 12.


// QUESTION 77


// // This function greets a user by name, or greets an anonymous user if no name is provided
// function greetUser(name: string = "anonymous") {
//     // Says hello to the given name or to an anonymous user
//     console.log(`Hello, ${name}!`);
// }

// // Trying the function with a name and without
// greetUser("Alice"); // Outputs: Hello, Alice!
// greetUser(); // Outputs: Hello, anonymous!
// // We see how our function can say hello to someone by name, or just say hello if we don't know the name.

// QUESTION 78

// Function declaration for squaring a number
function squareDeclaration(number: number): number {
    return number * number;
}

// Function expression for squaring a number
const squareExpression = function(number: number): number {
    return number * number;
};

// Using both functions to square the number 4
console.log(squareDeclaration(4)); // Outputs: 16
console.log(squareExpression(4)); // Outputs: 16
// Both methods give us the same result, showing two different ways to create functions that do the same thing.


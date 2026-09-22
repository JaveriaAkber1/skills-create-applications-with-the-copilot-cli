#!/usr/bin/env node
// Trigger exercise Step 2 grading workflow.

/**
 * calculator.js
 *
 * A simple Node.js CLI calculator that supports the four basic
 * arithmetic operations shown on the calculator keypad:
 *   - Addition       (+)
 *   - Subtraction    (-)
 *   - Multiplication (*)
 *   - Division       (/)
 *
 * Usage:
 *   node src/calculator.js add 5 3
 *   node src/calculator.js subtract 5 3
 *   node src/calculator.js multiply 5 3
 *   node src/calculator.js divide 5 3
 */

/**
 * Adds two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * Throws an error if dividing by zero.
 * @param {number} a
 * @param {number} b
 * @returns {number} The quotient of a and b.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Map CLI operation names (and symbols) to their corresponding functions.
const operations = {
  add: add,
  "+": add,
  subtract: subtract,
  "-": subtract,
  multiply: multiply,
  "*": multiply,
  divide: divide,
  "/": divide,
};

/**
 * Parses CLI arguments and runs the requested operation.
 * @param {string[]} args - CLI arguments in the form [operation, num1, num2].
 */
function main(args) {
  const [operation, rawA, rawB] = args;

  if (!operation || rawA === undefined || rawB === undefined) {
    console.error(
      "Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2>"
    );
    process.exitCode = 1;
    return;
  }

  const fn = operations[operation];
  if (!fn) {
    console.error(
      `Unknown operation: "${operation}". Supported operations: add, subtract, multiply, divide.`
    );
    process.exitCode = 1;
    return;
  }

  const a = Number(rawA);
  const b = Number(rawB);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error("Both arguments must be valid numbers.");
    process.exitCode = 1;
    return;
  }

  try {
    const result = fn(a, b);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

// Only run the CLI when this file is executed directly (not when imported).
if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = { add, subtract, multiply, divide };

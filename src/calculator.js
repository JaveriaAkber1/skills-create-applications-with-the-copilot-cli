#!/usr/bin/env node
// Trigger exercise Step 2 grading workflow.

/**
 * calculator.js
 *
 * A simple Node.js CLI calculator that supports the four basic
 * arithmetic operations shown on the calculator keypad, plus a few
 * additional operations:
 *   - Addition        (+)
 *   - Subtraction     (-)
 *   - Multiplication  (*)
 *   - Division        (/)
 *   - Modulo          (%)
 *   - Power           (^)
 *   - Square Root
 *
 * Usage:
 *   node src/calculator.js add 5 3
 *   node src/calculator.js subtract 5 3
 *   node src/calculator.js multiply 5 3
 *   node src/calculator.js divide 5 3
 *   node src/calculator.js modulo 10 3
 *   node src/calculator.js power 2 5
 *   node src/calculator.js squareRoot 16
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

/**
 * Returns the remainder of a divided by b.
 * Throws an error if dividing by zero.
 * @param {number} a
 * @param {number} b
 * @returns {number} The remainder of a / b.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

/**
 * Raises a base number to the given exponent.
 * @param {number} base
 * @param {number} exponent
 * @returns {number} base raised to the power of exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Returns the square root of a number.
 * Throws an error if the number is negative, since the square root
 * of a negative number is not a real number.
 * @param {number} n
 * @returns {number} The square root of n.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot compute the square root of a negative number.");
  }
  return Math.sqrt(n);
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
  modulo: modulo,
  "%": modulo,
  power: power,
  "^": power,
};

// Operations that only take a single argument (e.g. `squareRoot 16`).
const unaryOperations = {
  squareRoot: squareRoot,
  sqrt: squareRoot,
};

/**
 * Parses CLI arguments and runs the requested operation.
 * @param {string[]} args - CLI arguments in the form
 *   [operation, num1, num2] for binary operations, or
 *   [operation, num] for unary operations (e.g. squareRoot).
 */
function main(args) {
  const [operation, rawA, rawB] = args;

  const usage =
    "Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power> <num1> <num2>\n" +
    "       node src/calculator.js <squareRoot> <num>";

  if (!operation || rawA === undefined) {
    console.error(usage);
    process.exitCode = 1;
    return;
  }

  const unaryFn = unaryOperations[operation];
  if (unaryFn) {
    const a = Number(rawA);

    if (Number.isNaN(a)) {
      console.error("The argument must be a valid number.");
      process.exitCode = 1;
      return;
    }

    try {
      console.log(unaryFn(a));
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
    }
    return;
  }

  const fn = operations[operation];
  if (!fn) {
    console.error(
      `Unknown operation: "${operation}". Supported operations: add, subtract, multiply, divide, modulo, power, squareRoot.`
    );
    process.exitCode = 1;
    return;
  }

  if (rawB === undefined) {
    console.error(usage);
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

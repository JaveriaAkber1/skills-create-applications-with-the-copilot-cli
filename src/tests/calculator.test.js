/**
 * calculator.test.js
 *
 * Unit tests for the calculator functions (add, subtract, multiply, divide,
 * modulo, power, squareRoot) defined in src/calculator.js.
 *
 * Includes the example operations shown in images/calc-basic-operations.png:
 *   - 2 + 3
 *   - 10 - 4
 *   - 45 * 2
 *   - 20 / 5
 *
 * And the extended operations shown in images/calc-extended-operations.png:
 *   - modulo with 5 % 2
 *   - power with 2 ^ 3
 *   - square root with √16
 *
 * As well as additional cases and edge cases (e.g. division by zero,
 * modulo by zero, square root of a negative number).
 */

const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

describe("add", () => {
  test("2 + 3 = 5 (image example)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 15)).toBe(25);
  });

  test("adds negative numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test("adds a positive and a negative number", () => {
    expect(add(-4, 6)).toBe(2);
  });

  test("adds with zero", () => {
    expect(add(0, 7)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
  });
});

describe("subtract", () => {
  test("10 - 4 = 6 (image example)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test("results in a negative number", () => {
    expect(subtract(4, 10)).toBe(-6);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe("multiply", () => {
  test("45 * 2 = 90 (image example)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

describe("divide", () => {
  test("20 / 5 = 4 (image example)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers evenly", () => {
    expect(divide(100, 4)).toBe(25);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(5, 2)).toBeCloseTo(2.5);
  });

  test("divides negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("divides a negative by a positive number", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test("dividing zero by a number returns zero", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});

describe("modulo", () => {
  test("5 % 2 = 1 (image example)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns remainder of two positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("returns remainder for negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("returns remainder for negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("modulo of decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("throws an error when modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

describe("power", () => {
  test("2 ^ 3 = 8 (image example)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises a number to a positive exponent", () => {
    expect(power(3, 4)).toBe(81);
  });

  test("any number raised to the power of zero is one", () => {
    expect(power(7, 0)).toBe(1);
  });

  test("raises a number to a negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("raises a negative base to an even exponent", () => {
    expect(power(-2, 2)).toBe(4);
  });

  test("raises a negative base to an odd exponent", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("raises a decimal base to a power", () => {
    expect(power(1.5, 2)).toBeCloseTo(2.25);
  });
});

describe("squareRoot", () => {
  test("square root of 16 = 4 (image example: √16)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns the square root of a perfect square", () => {
    expect(squareRoot(81)).toBe(9);
  });

  test("returns a decimal result for a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.41421356);
  });

  test("square root of zero is zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of a decimal number", () => {
    expect(squareRoot(2.25)).toBeCloseTo(1.5);
  });

  test("throws an error for a negative number", () => {
    expect(() => squareRoot(-4)).toThrow(
      "Cannot compute the square root of a negative number."
    );
  });
});

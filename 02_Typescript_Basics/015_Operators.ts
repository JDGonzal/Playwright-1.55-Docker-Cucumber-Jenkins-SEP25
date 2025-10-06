// Arithmetic Operators
/** biome-ignore-all lint/style/useConst: demonstrating let usage for tutorial */
let a = 10;
let b = 3;
let sum = a + b; // 13
let difference = a - b; // 7
let product = a * b; // 30
let quotient = a / b; // 3.333...
let remainder = a % b; // 1
console.log(sum, difference, product, quotient, remainder);

// Comparison Operator
let x = 5;
let y = 10;

// biome-ignore lint/suspicious/noDoubleEquals: demonstrating let usage for tutorial
let isEqual = x == y; // false
let isStrictEqual = x === y; // false
// biome-ignore lint/suspicious/noDoubleEquals: demonstrating let usage for tutorial
let isNotEqual = x != y; // true
let isGreaterThan = x > y; // false
let isLessThan = x < y; // true
let isGreaterOrEqual = x >= y; // false
let isLessOrEqual = x <= y; // true
console.log(
	isEqual,
	isStrictEqual,
	isNotEqual,
	isGreaterThan,
	isLessThan,
	isGreaterOrEqual,
	isLessOrEqual,
);

// Logical Operator
let isTrue = true;
let isFalse = false;

let andResult = isTrue && isFalse; // false
let orResult = isTrue || isFalse; // true
let notResult = !isTrue; // false
console.log(andResult, orResult, notResult);

// Asignment Operator
let num = 5;
num += 3; // 5 + 3 = 8
num -= 2; // 8 - 2 = 6
num *= 4; // 6 * 4 =24
num /= 3; // 24/ 3 = 8
num %= 5; // 8 % 5 = 3
console.log(num);

// Ternary Operator
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);

/** biome-ignore-all lint/style/useConst: demonstrating let usage for tutorial */

// Boolean
let isDone: boolean = true;
let isEnabled: boolean = false;

console.log(isDone, isEnabled);

// Number
let num1: number = 25;
let num2: number = 99.99999;

console.log(num1, num2);

// String
let firstName: string = "Juan";
let lastName: string = "Piza";

console.log(firstName, lastName);

// Any
// biome-ignore lint/suspicious/noExplicitAny: demonstrating let usage for tutorial
let dynamicValue: any = 42;
console.log(dynamicValue);
dynamicValue = "David";
console.log(dynamicValue);

// Null and Undefined
let nullValue: null = null;
// biome-ignore lint/complexity/noUselessUndefinedInitialization: demonstrating let usage for tutorial
let undefiniedValue: undefined = undefined; //It's not necessary to initialize undefiniedValue to undefined.

console.log(nullValue, undefiniedValue);


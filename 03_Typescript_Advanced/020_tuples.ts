/** biome-ignore-all lint/style/useConst: demonstrating let usage for tutorial */

// Tuple type definition
let person: [string, number, boolean];

// Initializing a tuple
person = ["Alice", 30, true];

// Accessing tuple elements
console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 30
console.log(person[2]); // Output: true

// Modifying tuple elements
person[1] = 31; // Update age
console.log(person); // Output: ["Alice", 31, true]

// Tuple with optional elements
let employee: [string, number, string?];
employee = ["Bob", 101];
console.log(employee); // Output: ["Bob", 101]
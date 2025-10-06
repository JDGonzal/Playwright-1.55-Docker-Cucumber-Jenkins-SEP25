/** biome-ignore-all lint/style/useConst: demonstrating let usage for tutorial */
/** biome-ignore-all lint/style/useArrayLiterals: demonstrating let usage for tutorial */

// Array Literal
const fruits: string[] = ["Apple", "Banana", "Orange"];
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// Array Constructor 1
const numbers: Array<number> = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Array Constructor 2
const numbers2: number[] = new Array(1, 2, 3, 4, 5);
console.log(numbers2); // Output: [1, 2, 3, 4, 5]

// Initializate an empty array
const emptyArray: string[] = [];
console.log(emptyArray); // Output: []

// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(numbers[2]); // Output: 3

// Adding elements to an array
fruits.push("Mango");
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Mango"]

// Removing elements from an array
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: Mango
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// Removing the first element from an array
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apple
console.log(fruits); // Output: ["Banana", "Orange"]

// Adding elements to the beginning of an array
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Banana", "Orange"]

// Returns a copy of a section of an array. 
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Banana", "Orange"]

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // Output: ["STRAWBERRY", "BANANA", "ORANGE"]

// filter() method creates a new array with all elements that pass the test implemented by the provided function.
let longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longNamedFruits); // Output: ["Strawberry", "Banana", "Orange"]

// Readonly arrays
const readOnlyFruits: ReadonlyArray<string> = ["Apple", "Banana", "Orange"];
console.log(readOnlyFruits); // Output: ["Apple", "Banana", "Orange"]
// readOnlyFruits.push("Mango"); // Error: Property 'push' does not exist on type 'readonly string[]'.
/** biome-ignore-all lint/style/useConst: demonstrating let usage for tutorial */

const person = {
	name: "Maximilian",
	age: 30,
	hobbies: ["Sports", "Cooking"],
	role: [2, "author"],
};

console.log(person);

// person.role.push("admin"); // This works, but is not ideal for tuples
// person.role[1] = 10; // This will cause an error

const person2: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: "Manu",
	age: 31,
	hobbies: ["Read", "Write"],
	role: [2, "author"],
};

console.log(person2);

const contactInfo: {
	email: string;
	phone: number;
} = {
	email: "kljslak@mail.com",
	phone: 1234567890,
};

console.log(contactInfo);

// Merged Object
const mergedPerson = { ...person, ...contactInfo };
console.log("merged:", mergedPerson);

// Type Aliases
type Person = {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
};

const person3: Person = {
	name: "Anna",
	age: 25,
	hobbies: ["Dancing", "Singing"],
	role: [1, "admin"],
};

console.log(person3);

function hi() {
	console.log("Hello, I'm a function");
}

hi();

function calculateTotal(price: number, quantity: number): number {
	return price * quantity;
}
console.log(calculateTotal(5, 3));

function greet(name: string, greetMessage: string = "Hi"): string {
	return `${greetMessage} ${name}`;
}
console.log(greet("Juan"));
console.log(greet("Juan", "Good morning"));

// Arrow Functions
const multiply = (f1: number, f2: number): number => {
	return f1 * f2;
};
console.log(multiply(6, 18));

type MathOperation = (a: number, b: number) => number;
const add: MathOperation = (n1, n2) =>{ return(n1 + n2)};
console.log(add (6,7));

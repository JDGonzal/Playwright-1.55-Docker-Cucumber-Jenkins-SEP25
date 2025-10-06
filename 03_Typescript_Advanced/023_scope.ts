// Global Scope
const globalVar = 10;

function anyName() {
	console.log(globalVar);
}
anyName();

// Local Scope
function another() {
	const localVar = 20;
	console.log(localVar);
}
another();

// Block Scope
// biome-ignore lint/correctness/noConstantCondition: demonstrating let usage for tutorial
if (true) {
	const blockVar = 30;
	console.log(blockVar);
}

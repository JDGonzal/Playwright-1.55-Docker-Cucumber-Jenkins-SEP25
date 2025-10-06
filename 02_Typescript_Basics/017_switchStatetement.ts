/** biome-ignore-all lint/style/useConst: demonstrating let usage for tutorial */

let today = new Date().getDay(); // Get the current day of the week (0-6)
let dayName = "";

switch (today) {
	case 0:
		dayName = "Sunday";
		console.log("It's Sunday, time to relax!");
		break;
	case 1:
		dayName = "Monday";
		console.log("Happy Monday! Start of the work week.");
		break;
	case 2:
		dayName = "Tuesday";
		console.log("It's Tuesday. You got this!");
		break;
	case 3:
		dayName = "Wednesday";
		console.log("Hump day already!");
		break;
	case 4:
		dayName = "Thursday";
		console.log("Just one more day 'til the weekend!");
		break;
	case 5:
		dayName = "Friday";
		console.log("Happy Friday! The weekend is here!");
		break;
	case 6:
		dayName = "Saturday";
		console.log("Have a wonderful Saturday!");
		break;
	default:
		dayName = "Unknown Day";
		console.log("Something went wrong, unable to determine the day.");
}

console.log("Today is " + dayName + ".");

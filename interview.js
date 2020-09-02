//find the greatest largest divisor of two numbers
//example 4, 6 == 2 or 2,3 == 1

// function greatestDivisorOfTwo(x,y){
//     // this base case stops the recursion once secondNum hits zero (falsey) consider base case y = 0;
//     if (!y) {
// 			return x;
// 		}
// // recursively call greatestCommonDivisor function with params secondnum & the remainder of firstNum minus secondNum
// 		return greatestDivisorOfTwo(y, x % y);
// }

// // console.log(greatestDivisorOfTwo(4, 6));

// //n kids sitting in a circle
// //k toys available to distribute
// //i position to start from
// //3,5,1 = 2

// function getLK( n, k, i){
//     if(k>n){
//         return i + (k % n) -1;
//     }else{
//         return i + n -1;
//     }
// }

// console.log(getLK(3,5,1));


'use strict';
const process = require('process');
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
	return 1;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const a = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((aTemp) => parseInt(aTemp, 10));

	const b = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((bTemp) => parseInt(bTemp, 10));

	const result = compareTriplets(a, b);

	ws.write(result.join(' ') + '\n');

	ws.end();
}

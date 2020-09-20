//bubble sort algorithm
function b(a){

	for (let i = a.length; i > 0; i--) {
		//console.log(a[i])

		for (let j = 0; j < i - 1; j++) {
			//console.log(a[i],a[j])
			if (a[j] > a[j + 1]) {
				//let tmp=a[j]
				[a[j], a[j + 1]] = [a[j + 1], a[j]];
			}
		}
	}
	return a;
}

let a = [35, 45, 29, 8];
console.log(b(a));


//another implemetation

function bubbleSort(a) {
	let counter = 0;
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a.length - 1; j++) {
			if (a[j] > a[j + 1]) {
				[a[j], a[j + 1]] = [a[j + 1], a[j]];
				counter++;
			}
		}
	}
	console.log(`Array is sorted in ${counter} swaps.`);
	return a;
}

console.log(bubbleSort([3, 2, 1, 9, 45, 32, 98, 21]));

//Complete the countSwaps function below.
function countSwaps(a) {
	let counter = 0;
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a.length - 1; j++) {
			// Swap adjacent elements
			if (a[j] > a[j + 1]) {
				[a[j], a[j + 1]] = [a[j + 1], a[j]];
				counter++;
			}
		}
	}
	console.log(`Array is sorted in ${counter} swaps.`);
	console.log('First Element:', a[0]);
	console.log('Last Element:', a[a.length - 1]);
}

// console.log([3, 2, 1], bubbleSort([3, 2, 1]));

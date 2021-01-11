// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// function destroyer(arr, ...valuesToRemove) {
// 	return arr.filter((x) => !valuesToRemove.includes(x));
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function addCommas(num) {
    num = num.toFixed(2);
		var cents = (num - Math.floor(num)).toFixed(2);
		return Math.floor(num).toLocaleString() + '.' + cents.split('.')[1];
}

console.log(addCommas(1234890));
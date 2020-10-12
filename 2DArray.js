//2D Array
function hourglassSum(arr) {
	let hourglasses = [];
	for (let i = 0; i <= 3; i++) {
		for (let j = 0; j <= 3; j++) {
			let sum = 0;
			sum += arr[i][j];
			sum += arr[i][j + 1];
			sum += arr[i][j + 2];
			sum += arr[i + 1][j + 1];
			sum += arr[i + 2][j];
			sum += arr[i + 2][j + 1];
			sum += arr[i + 2][j + 2];
			hourglasses.push(sum);
		}
	}
	return Math.max(...hourglasses);
}

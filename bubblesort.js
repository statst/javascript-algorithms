function bubbleSort(a) {
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a.length - 1; j++) {
			if (a[j] > a[j + 1]) {
				[a[j], a[j + 1]] = [a[j + 1], a[j]];
			}
		}
	}
	return a;
}

console.log([3, 2, 1, 9, 45, 32, 98, 21], bubbleSort([3, 2, 1, 9, 45, 32, 98, 21]));

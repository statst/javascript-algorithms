function selectionSort(a) {
	for (let i = 0; i < a.length; i++) {
		let min= i;
		for (let j = i+1; j < a.length; j++) {
			if (a[j] < a[min]) {
				min=j;
			}	
	} 
	if(i !== min) [a[i], a[min]] = [a[min], a[i]];
	}
	return a;
}

console.log([3, 2, 1, 9, 45, 32, 98, 21] ,selectionSort([3, 2, 1, 9, 45, 32, 98, 21]));

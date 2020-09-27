//Alternating Characters sequence
function alternatingCharacters(s) {
	let ss = s.split('');
	let c = 0;
	for (let i = 0; i < ss.length - 1; i++) {
		if (ss[i] === ss[i + 1]) {
			c++;
		}
	}
	return c;
}

console.log(alternatingCharacters('AAAA'));
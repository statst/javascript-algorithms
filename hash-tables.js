console.log("hello".charCodeAt(0))

function hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}

function checkMagazine(magazine, note) {
	let result = 'Yes';
	for (let i = 0; i < note.length; i++) {
		const index = magazine.indexOf(note[i]);
		if (index === -1) {
			result = 'No';
			break;
		} else {
			magazine.splice(index, 1);
		}
	}
	console.log(result);
}


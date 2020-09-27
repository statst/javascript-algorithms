//Anagram sequence check
function makeAnagram(a, b) {
	var aResult = [...a].reduce((a, e) => {
		a[e] = a[e] ? a[e] + 1 : 1;
		return a;
	}, {});
	var bResult = [...b].reduce((a, e) => {
		a[e] = a[e] ? a[e] + 1 : 1;
		return a;
	}, {});

	let cnt = 0;
	for (var key in aResult) {
		if (key in bResult) {
			cnt = cnt + Math.abs(aResult[key] - bResult[key]);
		} else {
			cnt = cnt + Math.abs(aResult[key] - 0);
		}
	}

	for (var key in bResult) {
		if (key in aResult) {
			cnt = cnt + 0;
		} else {
			cnt = cnt + Math.abs(bResult[key] - 0);
		}
	}

	return cnt;
}

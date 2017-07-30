/*
Given a string, compute recursively (no loops) a new string where all
the lowercase 'x' chars have been changed to 'y' chars.

changeXY("codex") → "codey"
changeXY("xxhixx") → "yyhiyy"
changeXY("xhixhix") → "yhiyhiy"
*/

function changeXY(str) {
	if (str.length === 0) {
		return str;
	} else {
		return (str.substr(0,1) === 'x')
			? 'y' + changeXY(str.substr(1))
			: str.substr(0,1) + changeXY(str.substr(1));
	}
}

console.log(changeXY("codex")); // "codey"
console.log(changeXY("xxhixx")); // "yyhiyy"
console.log(changeXY("xhixhix")); // "yhiyhiy"
console.log(changeXY("xxx")); // "yyy"
console.log(changeXY("xellowx")); // "yellowy"
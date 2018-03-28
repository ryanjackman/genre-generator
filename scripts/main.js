import words from './words.js';

var button = document.querySelector('.generate');
var result = document.querySelector('.result');

const P_QUALITY = 0.1;
const P_TIME = 0.1;
const P_ORIGIN = 0.1;
const P_MODIFIER = 0.95;
const P_EXTRA_MODIFIER = 0.4;

const formats = ["%modifier% %root%",
"%modifier%-%modifier% %root%",
"%modifier% %root%%pseudoroot%",
"%modifier%%pseudoroot%"];

function generateGenre() {
	let string =
		(Math.random() < P_QUALITY ? (words.quality[Math.floor(Math.random()*words.quality.length)] + ' ') : '') +
		(Math.random() < P_TIME ? (words.time[Math.floor(Math.random()*words.time.length)] + ' ') : '') +
		(Math.random() < P_ORIGIN ? (words.origin[Math.floor(Math.random()*words.origin.length)] + ' ') : '');

	string += (Math.random() < P_MODIFIER ? (words.modifier[Math.floor(Math.random()*words.modifier.length)]) : '');

	let format = formats[Math.floor(Math.random()*formats.length)];

	while(format.includes('%modifier%')){
		format = format.replace('%modifier%', words.modifier[Math.floor(Math.random()*words.modifier.length)]);
	}
	format = format.replace('%root%', words.root[Math.floor(Math.random()*words.root.length)]);
	format = format.replace('%pseudoroot%', words.pseudoroot[Math.floor(Math.random()*words.pseudoroot.length)]);

	return string + ' ' + format;
}

button.onclick = function() {
	result.style.display = 'block';
	result.innerText = generateGenre().toUpperCase();
}
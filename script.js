var _ = require('lodash');

console.log(_);

var cssH3 = document.querySelector("h3");
var cssH4 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("buttonRandomColor");

/*
console.log(cssH3);
console.log(color1);
console.log(color2);
*//*
color1.addEventListener("input", function() {
	// body...
	console.log(color1.value);
})

color2.addEventListener("input", function() {
	// body...
	console.log(color2.value);
})
*/



function setGradient() {
	body.style.background = "linear-gradient(to right, " 
							+ color1.value 
							+ ", " 
							+ color2.value 
							+")";
	cssH3.textContent = body.style.background;

	var hexColor1 = "Color 1: "
					+ color1.value
					+ ", Color 2: "
					+ color2.value;
	cssH4.textContent = "Hex Code:- "+ hexColor1;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);





function randomIntegerMath(max) {
	return Math.floor(Math.random()*(max + 1));
}
function randomInteger() {
	let randInt = randomIntegerMath(255);
	return randInt;
}
//console.log(randomInteger());
function setRandomGradient() {
	var r1 = randomInteger();
	var g1 = randomInteger();
	var b1 = randomInteger();
	var r2 = randomInteger();
	var g2 = randomInteger();
	var b2 = randomInteger();


	body.style.background = "linear-gradient(to right, " 
							+ "rgb(" + r1 + ", " + g1 + ", " + b1
							+ "), " 
							+ "rgb(" + r2 + ", " + g2 + ", " + b2
							+"))";
	cssH3.textContent = body.style.background;

	//console.log(rgbToHex(r1,g1,b1));
	//console.log(rgbToHex(r2,g2,b2));
	var hexColor = "Color 1: "
					+ rgbToHex(r1,g1,b1)
					+ ", Color 2: "
					+ rgbToHex(r2,g2,b2);
	cssH4.textContent = "Hex Code:- "+ hexColor;
}
function rgbToHex(r,g,b) {
	// Convert from rgb to hex:
	let rH1 = r.toString(16), gH1 = g.toString(16), bH1 = b.toString(16);
	if (rH1.length == 1)
		rH1 = "0" + rH1;
	if (gH1.length == 1)
		gH1 = "0" + gH1;
	if (bH1.length == 1)
		bH1 = "0" + bH1;

	return "#" + rH1 + gH1 + bH1;
}

button.addEventListener("click", setRandomGradient);
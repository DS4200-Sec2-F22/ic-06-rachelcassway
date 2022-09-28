// JS File for index.html for ic-06
// Rachel Cassway, Shreya Modi, Vivian Weigel
// Last modified: 9/28/2022

// change color 
function colorClicker() {
	let lineButton = document.getElementById("bottomLine");

	// add class red
	lineButton.classList.add("red");
}

// add event handler to button
document.getElementById("lineButton").addEventListener("click", colorClicker)
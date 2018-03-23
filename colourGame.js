var numSquares = 6;
var colours = generateRandomColours(numSquares);

var squares = document.querySelectorAll(".square");
var picked = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colours = generateRandomColours(numSquares);
	picked = pickColour();
	colourDisplay.textContent = "Find me: " + picked;
	for (var i = 0; i <squares.length; i++){
		if(colours[i]){
			squares[i].style.backgroundColor = colours[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colours = generateRandomColours(numSquares);
	picked = pickColour();
	colourDisplay.textContent = "Find me: " + picked;
	for (var i = 0; i <squares.length; i++){
		squares[i].style.backgroundColor = colours[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	messageDisplay.textContent = "";
	colours = generateRandomColours(numSquares);
	picked = pickColour();
	colourDisplay.textContent  = "Find me: " + picked;
	this.textContent = "New Colours";
	for (var i =0 ; i <squares.length; i++){
		squares[i].style.backgroundColor = colours[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colourDisplay.textContent = "Find me: " + picked;
for (var i = 0; i < squares.length; i++){
	//add colours to squares
	squares[i].style.backgroundColor = colours[i];
	//add event listener to squares
	squares[i].addEventListener("click", function(){
		//grab colour of square
		var clickedColour = this.style.backgroundColor;
		//compare colour
		if(clickedColour === picked){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again";
			changeColours(clickedColour);
			h1.style.backgroundColor = clickedColour;

		}else{

			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		
	});

}
function changeColours(colour){
	//loop through squares to change colours
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colour;
	}
}
function pickColour(){
	var random = Math.floor(Math.random()*colours.length);
	return colours[random];
}
function generateRandomColours(num){
	//make array
	var arr = [];
	//add num random colours
	for (var i = 0; i < num; i++){
		//get random colour and put into array
		arr.push(randomColour());

	}
	//return array
	return arr;
}
function randomColour(){
	//pick a red green and blue
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}




var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");


init();
function init(){
 setupModeButton();
 setupSquares();
 set();
 
 }

 function setupModeButton(){
 	for(var i = 0; i < modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		//Terniary operator
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		set();
     
	});
   }
 }	
 
 function setupSquares(){
 	for(var i =0; i < squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor ){
    	messageDisplay.textContent = "Correct";
    	changeColors(clickedColor);
    	h1.style.background = clickedColor;
    	reset.textContent = "Play Again";
     }else {
    	this.style.background = "#232323";
    	    	messageDisplay.textContent = "Try Again";
    }
	});
 }
}


function set(){
colors = generateRandomColor(numSquares);
//pick new color from array
pickedColor = pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;
//change colors of squares
reset.textContent = "New Colors"
messageDisplay.textContent = "";
//change color of squares
for(var i = 0; i < squares.length; i++){
	if(colors[i]){
	squares[i].style.display = "block";	
	squares[i].style.backgroundColor = colors[i];
} else {
	squares[i].style.display = "none";
}	
	}
	
h1.style.backgroundColor = "steelblue";
messageDisplay.textContent = "";	
}



function changeColors(color){
	//loop through all squares
	for(var i =0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}
function generateRandomColor(num){
	var arr = []
	for(var i=0; i < num; i++){
		//get random color and push into arr
     arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a red from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a red from 0 - 255
	var b = Math.floor(Math.random() * 256);
    
    return"rgb(" + r +", " + g + ", " + b + ")";
}
reset.addEventListener("click", function(){
set();
});







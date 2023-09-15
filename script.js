var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 1500;	// Time Between Switch
	 
// Image List
images[0] = "images/RPS1.png";
images[1] = "images/RPS2.png";
images[2] = "images/RPS3.png";
images[3] = "images/RPS4.png";

// Change Image
function changeImg(){
	document.proj1.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
var i = 0; 			// Start Point for Images 1
var j = 0;			// Start Point for Images 2
var imagesProj1 = [];	// Images for Project 1 Array
var imagesProj2 = []; 	// Images for Project 2 Array
var imagesProj3 = []; 	// Images for Project 3 Array
var imagesProj4 = []; 	// Images for Project 4 Array
var time = 1500;	// Time Between Switch
	 
// Image List
imagesProj1[0] = "images/RPS1.png";
imagesProj1[1] = "images/RPS2.png";
imagesProj1[2] = "images/RPS3.png";
imagesProj1[3] = "images/RPS4.png";

imagesProj2[0] = "images/C4pic1.png";
imagesProj2[1] = "images/C4pic2.png";
imagesProj2[2] = "images/C4Pic3.png";

imagesProj3[0] = "images/tune1.png";
imagesProj3[1] = "images/tune2.png";
imagesProj3[2] = "images/tune3.png";

imagesProj4[0] = "images/CD1.png";
imagesProj4[1] = "images/CD2.png";
imagesProj4[2] = "images/CD3.png";



// Change Image
function changeImg(){
	document.proj1.src = imagesProj1[i];
	document.proj2.src = imagesProj2[j];
	document.proj3.src = imagesProj3[j];
	document.proj4.src = imagesProj4[j];


	// Check If Index Is Under Max
	if(i < imagesProj1.length - 1){ // this is for projects with 3 images
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Check If Index Is Under Max
	if(j < imagesProj2.length - 1){ // this is for projects with 4 images
		// Add 1 to Index
		j++; 
	  } else { 
		  // Reset Back To O
		  j = 0;
	  }

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
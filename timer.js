function show_things () {
	// body... 
	var wait = prompt("How much time u want to sleep...");

	setTimeout(wake_message, wait);
}

function wake_message () {
	// body... 

	alert("wake up , wake up ,wake up...")
}

var the_image, x_position = 0,the_timer;
function set_timer () {
	// body... 
	

	the_image = document.getElementById("image");
	x_position = x_position + 1;
	the_image.style.left  = x_position;
	the_timer = setTimeout(set_timer,50);
}
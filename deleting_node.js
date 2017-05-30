function example1 () {
	// body... 
	var the_node = document.getElementById("firstP");
	the_node.parentNode.removeChild(the_node);
}

function example2 () {
	// body... 
	var the_node = document.getElementsByTagName("p")[0];
	the_node.parentNode.removeChild(the_node);
}
function example3 () {
	// body... 
	var the_parent = document.getElementsByTagName("body");
	the_parent.removeChild(the_parent.firstChild);
}
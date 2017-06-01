function show () {
	// body... 
	var node = document.getElementById("mylist").lastChild;
	var the_clone = node.cloneNode(true);
	document.getElementById("mylist").appendChild(the_clone);
}
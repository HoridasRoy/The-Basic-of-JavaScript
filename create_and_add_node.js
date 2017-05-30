function insert_text () {
	// body... 
	var newitem = document.createElement("hr");

	var destparent = document.getElementsByTagName("body")[0];

	destparent.insertBefore(newitem, destparent.firstChild);
}

function insert_new_text () {
	// body... 

	var newtext = document.createTextNode("This text will be added.");
	var textpart = document.getElementsByTagName("h2")[0];
	textpart.insertBefore(newtext, textpart.firstChild);
}
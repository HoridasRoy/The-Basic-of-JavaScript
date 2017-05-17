
function conditional () {
	// body... 
	var user_name;

	user_name = prompt("what is your name?..." );

	if(user_name == "Horidas")
		document.write("Great");
}

function show(){

	var user_name ;

	user_name = prompt("what is name..?");

	switch (user_name) {
		case "Horidas":
			document.writeln("Great name");
			break;

		case "Roy":
			document.write("This seems to be incomplete..");
			break;
		default:
			document.write("This is not proper name ...");
			break;
	}
}

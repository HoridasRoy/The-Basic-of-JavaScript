
var finished, response;

	finished = false;

	
	while (!finished) {
		// statement
		response = prompt("R u agree to the terms and conditions..?");

		if(response.indexOf("y") == 0){

			finished = true;
		}
	}


	function show () {
		// body... 
		var finished, response;

		finished = 10;

	
		do {
		// statement
			response = prompt("R u agree to the terms and conditions..?");

			if(response.indexOf("y") == 0){


				document.writeln(finished + "\n");
				finished--;


			}

		}while (finished != 0);
	}
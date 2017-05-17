var target;
var finished = false;
var guess_input_text;
var guess_input;
var guess = 0;

function do_game() {
	// body...
	var random_number = Math.random() * 100;
	var random_number_integer = Math.floor(random_number);
	target = random_number_integer + 1;

	while (!finished) {
		// statement
		guess_input_text = prompt("I am guessing a number" +
			" in the range 1 to 100\n\n" +
			"What is the number?");

		guess_input = parseInt(guess_input_text);

		guess = guess + 1;
		finished = check_guess();
		
	}
}

function check_guess(){

	if(isNaN(guess_input)){

		alert("you don't enter a number..\n\n" +
			"please enter a number between 1 to 100..");

		return false;
	}

	if (guess_input < 1 || guess_input > 100) {
		
		alert("Please enter a number between 1 to 100..");

		return false;
	}

	if (guess_input > target) {

		alert("The number is too large..");

		return false;
		
	}

	 if (guess_input < target) {

		alert("The number is too small..");

		return false
		
	}

	if (guess_input_text == target) {
		
		
		if(guess == 1){
		
			alert("Yes... You got the number: " + target +"\n\n" +
			"it tooks " + guess + " guess.." );
		}

		else{

			alert("Yes... You got the number: " + target +"\n\n" +
			"it tooks " + guess + " guesses.." );
		}

		return true;
	}

}

function first() {
	// body...
	alert("First function is running: ");

	return false;
}

function second() {
	// body..
	alert("Second function is running..: ");

	return true;
}

var function_test = (first() && second());
alert("The value is " + function_test);

function_test = (first() || second());
alert("The value is " + function_test);

function Check_user_age () {
	// body... 
	if(age_of_user() < 18)
		alert("please go to another page...");

}

function age_of_user(){

	var age_text, age;

	age_text = prompt("What is your age..");
	age  = parseInt(age_text);

	return age;

}
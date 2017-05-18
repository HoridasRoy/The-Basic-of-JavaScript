
var pets = ["Cats", "dogs","dragon","tiger","snake","pengiun"];

var response,count = 0;

for(var index = 0; index < pets.length; index++){

	var response = confirm("Have u see the animal...: " +pets[index] 
		+ "?");

	if(response)
	{
		count++;
	}

}

alert("you have seen " + count + "animals");
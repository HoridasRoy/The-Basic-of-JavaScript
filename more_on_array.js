
var pets = ["dogs", "cats","cows","rabbit","cats", "hamster","pengein"];
pets.sort();

alert(pets);

pets.reverse();
alert(pets);

pets.sort().reverse();
alert(pets);

alert(pets.indexOf("dogs"));

var result = pets.slice(1, 5);
alert(result);


var pos = [],  searchAt = 0;

do{
	foundAt = pets.indexOf("cats", searchAt);
	

	if (foundAt != -1) {
		// statement

		pos.push(foundAt);

		searchAt = foundAt + 1;
	}
}while (foundAt != -1) 
	// statement


alert(pos);

var pets = ["dogs", "cats", "Rabbit"];
alert(pets.join(" and "));

var pets = ["dogs", "cats", "Rabbit"];
alert(pets.join());

pets[2] = "cow";
alert(pets.join());

pets.push("Crow");
alert(pets.join());

//alert(pets.indexOf("cats");

var primes = [1,1,35,4];

var result = pets.concat(primes);
alert(result.join());
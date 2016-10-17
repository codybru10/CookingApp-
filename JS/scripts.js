var conversion = function(grams) {
	return grams * .03527396195;
};

var weight = parseInt(prompt("Enter weight in grams here"));
var result = conversion(weight);
var sentence = "The weight in ounces is " + result + ".";
alert(sentence);

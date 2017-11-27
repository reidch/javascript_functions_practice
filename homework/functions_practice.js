//
// Episode 1
//
// var name = 'Keith';
//
// var printName = function() {
//   console.log('My name is ' + name );
// };
//
// printName();
//
// ANSWER
// This is assigning the name to a variable and then using concatenation
// to put it into a sentence which reads "My name is Keith".

// Episode 2
//
// score = 5;
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());
//
// ANSWER
// The variable score is declared as 5 at the beginning but then score is
// overwritten as 3 in the result function so when function is invoked, the score returned is 3.

// Episode 3
//
// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
// listAnimals();

// ANSWER
// myAnimals is declared outside the function at the beginning but then overwritten within the function.
// The function is a for loop which loops through the array and returns the index position and name of each animal.
// As the initial variable has been overwritten with different animals, the output to the terminal will be:
// 0: Ducks
// 1: Dogs
// 2: Lions

// Episode 4
//
// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';
//
// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };
//
// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );

// ANSWER
// 4 variables (suspects) are declared at the beginning
// but then a different suspect 3 is declared within the function allSuspects, overwriting the original suspectThree
// so the first time allSuspects is invoked, the result will include the latest suspectThree,
// concatenating the names as follows: "Suspects include: Jay, Val, Harvey, Rick".
// The last line of Episode 4 is outside the allSuspects function and therefore the variable declared initially is returned,
// concatenated as follows: "Suspect three is:Keith" (there should be a space after the colon).

// Episode 5
//
// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
// //
// console.log(detectiveInfo());

// ANSWER
// The variable detective is declared but not used. It is later overwritten with the name of a different detective, Poirot.
// So when the function is invoked, it prints the name of the detective as declared in the detectiveInfo function, Poirot.

// Episode 6
//
// var murderer = 'rick';
//
// var outerFunction = function() {
//   var murderer = 'marc';
//
//   var innerFunction = function() {
//     murderer = 'valerie';
//   }
//
//   innerFunction();
// }
//
// outerFunction();
// console.log('the murderer is ', murderer);

// ANSWER
// It is the first variable declared which is concatenated, returning "the murderer is rick".
// This is because it is a global variable and it takes precedence over the variables declared
// in the outer and inner functions.

// Episode 7 - Make up your own episode/s!
//
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var suspect = "Gaear Grimsrud";
var victim = "Carl Showalter";
var weaponOne = "an axe";
var weaponTwo = "a woodchipper";

var intendedCrime = function(){
	var suspectOne = "Gaear Grimsrud";
	var suspectTwo = "Carl Showalter";
	var victim = "Jean Lundegaard";

	var actualCrime = function(){
		var suspect = "Jerry Lundegaard";
		var victim = "Jean Lundegaard";
	}

	actualCrime();
}
intendedCrime();
console.log("The eventual crime involved " + suspect + " killing " + victim + " with " + weaponOne + " and disposing of his body in " + weaponTwo);

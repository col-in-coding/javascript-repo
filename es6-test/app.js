// Inheritance from class
class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	greet(){
		console.log('Hello: ' + this.firstname + ' ' + this.lastname);
	}
}
var john = new Person('john', 'doe');

// Inheritance from function constructor
function Person2(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}
Person2.prototype.greet = function(){
	console.log('Hello: ' + this.firstname + ' ' + this.lastname);
}
var jane = new Person2('jane', 'doe');

console.log(john);
console.log(jane);
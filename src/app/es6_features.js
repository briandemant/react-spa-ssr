//if (__DEV__) {
//	console.warn('Extra dev');
//}
//if (__PRERELEASE__) {
//	console.warn('Extra prerelease');
//}
console.log(process.argv)
// --------------------------------------------
"array comprehension";
var customers = [{city : 'a', name : 'a'}, {city : 'b', name : 'b'}, {city : 'c', name : 'c'}];
var seattlers = [for (c of customers) if (c.city != "b") {name : c.name, age : c.age}];

// --------------------------------------------
"arrow functions";
var array = (()=> {return [1, 2]});
var Thing = {
	huh : function() {
		return ()=> this;
	}
}
console.log(Thing == Thing.huh()());


// --------------------------------------------
"let and const"
const fixed = "fixed";
//fixed += 'more?'
let funcs = [];
for (let i of [4, 5, 6]) {
	funcs.push(function() { return i; });
}

// --------------------------------------------
"classes"
class Character {
	constructor(name) {
		this.name = name;
	}

	talk() {
		console.log('Hi I\'m ' + this.name);
	}
}
class Monster extends Character {
	constructor(name, sound) {
		super(name);
		this.sound = sound;
	}

	talk() {
		super.talk();
		console.log(this.sound);
	}
}

// --------------------------------------------
"Computed Property Names"
var x = 0;
var obj = {
	[x] : 'hello'
};

// --------------------------------------------
"Default values"
function f(list, indexA = 0, indexB = list.length) {
	return [list, indexA, indexB];
}


// --------------------------------------------
"Destructuring Assignment"
var [a, [b, c], [d]] = ['hello', [', ', 'junk'], ['world']];

// --------------------------------------------
"Iterators and For Of"
var res = [];
for (var element of [1, 2, 3]) {
	res.push(element * element);
}

// --------------------------------------------
"Generators"
function* morerandom(t) {
	while (true) {
		yield*  Math.random() * t;
	}
}

// --------------------------------------------
"modules / import"
import {firstName, lastName, year} from './module';

// --------------------------------------------
"Numeric Literals"
var binary = [
	0b0,
	0b1,
	0b11
];

// --------------------------------------------
"Object Initializer Shorthand"
function getPoint() {
	var x = 1;
	var y = 10;

	return {x, y};
}

// --------------------------------------------
"Rest parameters"
function push(array, ...items) {
	items.forEach(function(item) {
		array.push(item);
	});
}


// --------------------------------------------
"Spread parameters"
function push2(array, ...items) {
	array.push(...items);
}
var res = [1, 2, 3];
push2(res, ...res);


// --------------------------------------------
"Template Literals"
var name = 'qwe';
var greeting = `hello ${name}!`;

// --------------------------------------------
"Symbols"
var a = Symbol('name');
var b = Symbol('name');
console.log(a);
console.log(b);
console.log(a == b);
console.dir(b);

var object = {};
object[a] = 42;
object[b] = 43;
console.log('a = ' + object[a]);
console.log('b = ' + object[b]);

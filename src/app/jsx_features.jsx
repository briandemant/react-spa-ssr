 
 
for (let i = 0; i < 9; i++) {
	var qwe = <Hans i={i}/>;
}

var i = 0;
console.log(i);


if (__DEV__) {
	console.warn('Extra dev');
}
if (__PRERELEASE__) {
	console.warn('Extra prerelease');
}

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
function push(array, ...items) {
  array.push(...items);
}
var res = [1,2,3];
push(res, ...res);


// --------------------------------------------
"Template Literals"
var greeting = `hello ${name}!`;
 
// --------------------------------------------
"Symbols" 
var s = Symbol('name');
console.log(s);

var object = {};
object[s] = 42; 
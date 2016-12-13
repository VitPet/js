//Task - 1 

function plus(a,b){
	return a+b;
}
var t1 = plus(4,4);
console.log(t1);
console.log(typeof(t1))

// Task - 2

function pow (a,b){
	return	Math.pow(a,b);
}
var t2 = pow(3,3);
console.log(t2);
console.log(typeof(t2))

// Task - 3

function obj(a){
	return {a:a}
}
var t3 = obj(1)
console.log(t3);
console.log(typeof(t3));

// Task - 4

function e(b){
	
     return function() {return b;};
}
 
var t4 = e(123);
console.log(t4);
console.log(typeof (t4));

//Task - 5

function array (El, numOfEl){
	var arr = [];
	for(var i = 0; i<numOfEl; i++){
		arr[i]=El;
	}
	return arr
}
var t5 = array (5 , 4)
console.log(t5)
console.log(typeof(t5))

//Task - 6

function g(x) {
	if (x) {
		return x;
	} else {
		return 99;
	}
}
var t6 = g(5)
console.log(t6)
console.log(typeof(t6))

//Task - 7

function h(foo) {
	return foo();
}

//Task - 8



function j(array) {
	var result = 0;
	for (var i = 0; i < array.length; i++){
		result = result + array[i];
	}
	return result;
}
var arr = j([2,4,6])
console.log(arr)
console.log(typeof(arr))


//Task - 9

function k(object = {}) {
	var result = 0;
	for (var key in object) {
		result = result + object[key];
	}
	return result;
}
var arr = k({a:1,b:2,c:3})
console.log(arr)
console.log(typeof(arr))

//Task - 10

function m(array1, array2) {
	var result = [];
	for (var i = 0; i < array1.length; i++){
		result[i] = array1[i] + array2[i];
	}
	return result;
}
var arr = m([5,23,12],[6,11,25])
console.log(arr)
console.log(typeof(arr))

//Task - 11
function n(x) {
	return function(y) {
		return function(z) {
			return x + y + z;
		}
	}
}
var func = n(10)(11)(12);
console.log(func)
console.log(typeof(func))






//#2

function arithmethicoperator(){
    // Addition operator
console.log(4 + 8);

// Subtraction operator
console.log(4 - 8);

// Multiplication operator
console.log(4 * 8);

// Division operator
console.log(4 / 8);

// Modulus operator
console.log(7 % 3);

var num = 10;

console.log(num);

// Increment operator
num++; // num = num + 1

console.log(num);

var num2 = 10;

console.log(num2);

// Decrement operator
num2--; // num2 = num2 - 1

console.log(num2);

var num3 = 10;

console.log(num3);

console.log(--num3);

console.log(num3);
}

function assignmentoperator(){
    var var1 = 9;
    console.log(var1);

    var var2 = 9;
    var2 += 6;
    console.log(var2);

    var var3 = 9;
    var3 -= 6;
    console.log(var3);

    var var4 = 9;
    var4 *= 6;
    console.log(var4);

    var var5 = 9;
    var5 /= 6;
    console.log(var5);

    var var6 = 9;
    var6 %= 6;
    console.log(var6);
}

function bitwiseoperator(){
    var num1 = 27;
var num2 = 22;

// AND operator &
console.log(num1 & num2);

// 27 in binary

// 16 8 4 2 1
// 1  1 0 1 1

// 22 in binary

// 16 8 4 2 1
// 1  0 1 1 0

// 1  1 0 1 1
// 1  0 1 1 0
// 1  0 0 1 0
}

function comments(){
// Hello this is an epic variable
//var i = 9;

/*
var i1 = 1;
var i2 = 1;
var i3 = 1;
var i4 = 1;
*/

var i5 = 9;
}

function comparisonoperator(){

var var1 = 9;
var var2 = '9';

// Equal ==
console.log(var1 == var2);
// Equal ===
console.log(var1 === var2);

// Not Equal !=
console.log(var1 != var2);

// Greater than >
console.log(var1 > var2);

// Less than <
console.log(var1 < var2);

// Greater than or equal to >=
console.log(var1 >= var2);

// Less than or equal to <=
console.log(var1 <= var2);
}

function conditionaloperator(){
    var num1 = 100;
    var num2 = 100;
    
    var result = (num1 < num2) ? "yay" : "nay";
    
    console.log(result);
}

function conditionalstatement(){
    var num1 = 314;
    var num2 = 314;
    
    if (num1 < num2)
    {
        console.log("Num1 is less than Num2");
    }
    else if (num1 > num2)
    {
        console.log("Num1 is greater than Num2");
    }
    else
    {
        console.log("Default fallback code");
}
}

function consoleoutput(){
// Hello this is an epic variable
//var i = 9;

/*
var i1 = 1;
var i2 = 1;
var i3 = 1;
var i4 = 1;
*/

var helloWorld = 9;

console.log(helloWorld);
console.log("Hello world");
console.log(5);
}

//cookies

function SetCookie()
    {
        document.cookie = "username=frahaan"
    }

function GetCookie()
    {
        console.log(document.cookie);
    }


function dowhileloop(){
    for (var i = 1000; i <= 100; i += 2)
{
	console.log("This is position for I: " + i);
}

var j = 1000;

while (j <= 100)
{
	console.log("This is position for J: " + j);
	j += 2;
}

var k = 1000;

do
{
	console.log("This is position for K: " + k);
	k += 2;
} while (k <= 100)

}

function forinloop(){
var amazingObject = {frahaan: 1, b: 2, c: 3, d: 4};

for (var item in amazingObject)
{
	console.log(item + " : " + amazingObject[item]);
}
}

function forloop(){
    for (var i = 0; i <= 100; i += 2)
{
	console.log("This is position: " + i);
}

}

function functions(){

function AwesomeFunc()
{
	console.log("Hello");
	console.log("and");
	console.log("Goodbye");
}

function Sum(num1, num2)
{
	var result = num1 + num2;

	console.log(result);
}

function SumReturn(num1, num2)
{
	var result = num1 + num2;

	return result;
}

AwesomeFunc();
Sum(4, 7);

console.log(SumReturn(5, 9));

var epicVar = SumReturn(2, 100);

console.log(epicVar);
}

function logicaloperator(){
    var var1 = false;
var var2 = false;

// AND operator &&
console.log(var1 && var2);

// OR operator ||
console.log(var1 || var2);

// NOT operator !
console.log(!var1);


var num1 = 9;
var num2 = 10;
var num3 = 11;
var num4 = 11;

console.log((num1 < num2) && (num3 == num4));
}

function loopadvanced(){
    for (var i = 0; i <= 100; i += 2)
{
	if (i === 50)
	{
		//break;
		continue;
	}

	console.log("This is position for I: " + i);
}
}

function noscript(){
// Hello this is an epic variable
//var i = 9;

/*
var i1 = 1;
var i2 = 1;
var i3 = 1;
var i4 = 1;
*/

var i5 = 9;
}

function promptbox(){
// Hello this is an epic variable
//var i = 9;

/*
var i1 = 1;
var i2 = 1;
var i3 = 1;
var i4 = 1;
*/

var awesome = prompt("Please enter your name", "Batman")

console.log(awesome);
}

function strictmode(){
// Hello this is an epic variable
//var i = 9;

/*
var i1 = 1;
var i2 = 1;
var i3 = 1;
var i4 = 1;
*/

var helloWorld = 9;

helloWorid = 8;
}

function switchfunction(){
var awesomeVar = 0;

switch (awesomeVar)
{
	case 0:
	console.log("This is 0");
	break;

	case 1:
	console.log("This is 1");
	break;

	case 2:
	console.log("This is 2");
	break;

	case 3:
	console.log("This is 3");
	break;

	case 4:
	console.log("This is 4");
	break;

	case 5:
	console.log("This is 5");
	break;

	default:
	console.log("This is the default value");
	break;
}

}

function typeofoperator(){
var var1 = 10001;
var var2 = "Hello World"

console.log(typeof var1);
console.log(typeof var2);
}

function variables(){
// Hello this is an epic variable
//var i = 9;

/*
var i1 = 1;
var i2 = 1;
var i3 = 1;
var i4 = 1;
*/

{
	var helloWorld = 9;
}

console.log(helloWorld);

helloWorld = "Hello World";

console.log(helloWorld);

{
	let hello = 5;
}

console.log(hello);
}

function voidfunction(){
    void function VoidFunc()
{
	console.log("Hi");
} ();

VoidFunc();

}

function whileloop(){
    for (var i = 1000; i <= 100; i += 2)
{
	console.log("This is position for I: " + i);
}

var j = 0;

while (j <= 100)
{
	console.log("This is position for J: " + j);
	j += 2;
}

}

//#3

function arrays(){
var var1 = 8;

var arrName = [10, 20, 30, 40, 50, 60];

console.log(arrName[0]);
console.log(arrName[1]);

for (var i = 0; i < arrName.length; i++)
{
	console.log(arrName[i]);
}

var newArray = new Array(100);

for (var i = 0; i < newArray.length; i++)
{
	newArray[i] = i * i;
}

for (var i = 0; i < newArray.length; i++)
{
	console.log(newArray[i]);
}


newArray.push("Hello World");

for (var i = 0; i < newArray.length; i++)
{
	console.log(newArray[i]);
}


console.log(newArray.findIndex((x) => x == 9801));
}

function boolean(){
var var1 = false;
var boolObj = new Boolean(false);

console.log(var1);
console.log(boolObj.valueOf());
}

function date(){
var dateObj = new Date();
console.log(dateObj);
console.log(dateObj.getFullYear());
console.log(dateObj.toString());
console.log(dateObj.toTimeString());
}

function math(){
console.log(Math.PI);
console.log(Math.pow(12, 2));
console.log(Math.round(345.6));
console.log(Math.sqrt(144));
console.log(Math.sqrt(12));
}

function number(){
var i = new Number(67.463098);
console.log(i);
console.log(i.toPrecision(3));
console.log(i.toString());
console.log(Number.MAX_VALUE);
}

function regularexpressions(){
var re = /(\w+)\s(\w+)/;
var string = "JKohn Smith";

console.log(string);

var result = string.replace(re, '$2, $1');

console.log(result);
}

function string(){
var var1 = "Hello World";
var stringObj = new String("Hello World");
console.log(var1);
console.log(stringObj);
console.log(stringObj.length);
console.log(stringObj.toUpperCase());
console.log(stringObj.valueOf());
}

//#4

function classinheritance(){
    class Vehicle
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");

		this.x = x;
		this.y = y;
	}

	VehicleFunc()
	{
		console.log("This function is from the Vehicle class");
	}
}

class Car extends Vehicle
{
	EpicFun()
	{
		console.log("This is an epic function");
	}

	static StaticFun()
	{
		console.log("This is epicly static.");
	}
}

class Bike extends Vehicle
{

}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);

var bikeObj = new Bike(0, 0);

bikeObj.VehicleFunc();


}

function functionclasses(){
    class Car
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");

		this.x = x;
		this.y = y;
	}

	EpicFun()
	{
		console.log("This is an epic function");
	}
}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);

console.log("(" + carObj.x + ", " + carObj.y + ")");
console.log("(" + carObj2.x + ", " + carObj2.y + ")");

carObj.EpicFun();
}

function instanceofoperator(){
    class Car
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");

		this.x = x;
		this.y = y;
	}

	EpicFun()
	{
		console.log("This is an epic function");
	}

	static StaticFun()
	{
		console.log("This is epicly static.");
	}
}

class Bike
{

}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);

var bikeObj = new Bike();

var isValid = carObj instanceof Car;
var isValid2 = bikeObj instanceof Car;

console.log(isValid);
console.log(isValid2);

}

function methodoverriding(){
    class Vehicle
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");

		this.x = x;
		this.y = y;
	}

	VehicleFunc()
	{
		console.log("This function is from the Vehicle class");
	}
}

class Car extends Vehicle
{
	EpicFun()
	{
		console.log("This is an epic function");
	}

	static StaticFun()
	{
		console.log("This is epicly static.");
	}

	VehicleFunc()
	{
		console.log("This is the Car Class");
	}
}

class Bike extends Vehicle
{

}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);

var bikeObj = new Bike(0, 0);

carObj.VehicleFunc();
bikeObj.VehicleFunc();

}

function simpleclass(){
    class Car
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");
	}
}

var carObj = new Car(56, 78);
}

function staticfunctions(){
    
class Car
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");

		this.x = x;
		this.y = y;
	}

	EpicFun()
	{
		console.log("This is an epic function");
	}

	static StaticFun()
	{
		console.log("This is epicly static.");
	}
}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);

console.log("(" + carObj.x + ", " + carObj.y + ")");
console.log("(" + carObj2.x + ", " + carObj2.y + ")");

carObj.EpicFun();

Car.StaticFun();

}

function superkeyword(){
    class Vehicle
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");

		this.x = x;
		this.y = y;
	}

	VehicleFunc()
	{
		console.log("This function is from the Vehicle class");
	}
}

class Car extends Vehicle
{
	EpicFun()
	{
		console.log("This is an epic function");
	}

	static StaticFun()
	{
		console.log("This is epicly static.");
	}

	VehicleFunc()
	{
		super.VehicleFunc();
		console.log("This is the Car Class");
	}
}

class Bike extends Vehicle
{

}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);

var bikeObj = new Bike(0, 0);

carObj.VehicleFunc();
//bikeObj.VehicleFunc();

}

function variableclasses(){
class Car
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");

		this.x = x;
		this.y = y;
	}
}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);

console.log("(" + carObj.x + ", " + carObj.y + ")");
console.log("(" + carObj2.x + ", " + carObj2.y + ")");
}

//#5

function ajax(){
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function()
{
	if (this.readyState == 4 && this.status == 200)
	{
		console.log(this.responseText);
	}
};

xhttp.open("GET", "file.txt", true);
xhttp.send();

}

function anonymousfunction(){
    var epicVar = function()
{
	console.log("Hello World");
}

epicVar();

}

function arrowlambdafunction(){
var epicVar = () =>
{
	console.log("Hello World");
}
epicVar();
}

function blockscope(){
    function EpicFunc()
{
	var epicNum = 789;

	console.log(epicNum);

	{
		let epicNum = 800;
		console.log(epicNum);
	}

	console.log(epicNum);
}

EpicFunc();
}

function browsernavigator(){
console.log(navigator.javaEnabled());
console.log(navigator.onLine);
console.log(navigator.deviceMemory);
console.log(navigator.vendor);
}

function errorhandling(){
var num1 = 9;
var num2 = 0;

try
{
	if (num2 === 0)
	{
		throw("You cannot divide by zero dammit");
	}
	else
	{
		console.log(num1 / num2);
	}
}
catch (error)
{
	console.log(error);
}
finally
{
	console.log("This is code is immortal!!!");
}
}

function constructor(){
    var epicVar = () =>
{
	console.log("Hello World");
}


var epicVar2 = new Function("x", "y", "console.log(x * y);");



epicVar();
epicVar2(5, 6);

}

function hoisting(){
EpicFunc();

function EpicFunc()
{
	console.log("Hello World");
}
}

function generatorfunction(){
    function *Favourites()
{
	var pizza = yield "What is your favourite pizza?";
	var game = yield "What is your favourite game";
	var movie = yield "What is your favourite movie";

	console.log(pizza + " " + game + " " + movie);
}

var q = Favourites();
console.log(q.next());
console.log(q.next("Cheese"));
console.log(q.next("Half-Life"));
console.log(q.next("The Dark Knight"));
}

function immediatelyinvokedfunctionexpression(){
    var EpicFunc = function()
{
	var EpicLoop = function()
	{
		for (var i = 0; i < 10; i++)
		{
			console.log(i);
		}
	}();

	console.log(i);
}

var EpicFunc2 = function()
{
	(function()
	{
		for (var i = 0; i < 10; i++)
		{
			console.log(i);
		}
	})();

	console.log(i);
}

//EpicFunc();
EpicFunc2();
}

function javascripturi(){
var uri = "my test.asp?name=ståle&car=saab";
var result = encodeURI(uri);

console.log(uri);
console.log(result);

var resultD = decodeURI(uri);

console.log(resultD);
}

function looplabel(){
    outsideTheLoop:
for (var i = 0; i < 100; i++)
{
	if (i === 80)
	{
		break outsideTheLoop;
	}

	console.log(i);
}
}

function mapcollection(){
    
var mp = new Map();
mp.set("Key1", "Hello World");
mp.set("1", "Number 1");

console.log(mp);
console.log(mp.get("Key1"));
console.log(mp.get("1"));
console.log(mp.has("1"));

var mp2 = new Map(
[
	["k1", "value1"],
	["k2", "value2"],
	["k3", "value3"]
]);

console.log(mp2);

for (let i of mp2.entries())
{
	console.log(`${i[0]} - ${i[1]}`);
}
}

function promises(){
    function Divide(num1, num2)
    {
        var promise = new Promise(function(resolve, reject)
        {
          if (num2 !== 0)
          {
            resolve(num1 / num2);
          }
          else
          {
            reject("It didn't work");
          }
        });
    
        return promise;
    }
    
    Divide(5, 0)
    .then(
        function(result) {
            console.log(result);
            return Divide(6, 7);
        },
            function(err) {
            console.log(err);
        })
    .then(
        function(result) {
            console.log(result);
        },
        function(err) {
            console.log(err);
        });
    
}

function setcollection(){
var st = new Set([1, 2, 3, 5, 5]);

console.log(st);
console.log(st.has(5));
console.log(st.has(9));

for (let item of st)
{
	console.log(item);
}
}

function templateliterals(){
    var str = `Hello
fsd
f
sdf
s
dfWorld`;

var age = 26;

var str2 = `My age is ${age * 7} and I am Batman`;

console.log(str);
console.log(str2);
}

function variablehoisting(){
num = 10;
console.log(num);
var num;

}
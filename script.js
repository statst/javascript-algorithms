console.log("Hello World")

//ES5
//variables and data types
//declare a variable
var firstName= 'Jo';
console.log(firstName);

//string
var lastName = 'Shinde';

//number
var age = 24;

//boolean
var myName = true;
console.log(myName)

//undefined
var myAge;
console.log(myAge);

//variable naming rules
var _3years = 3;
var jobTitle = "Software Developer"
var $experience = 3;

console.log(_3years);
console.log(jobTitle);
console.log($experience)

//variable mutation and type coercion
var firstName = 'Jo';
var lastName = 'Shinde';
var age = 24;
isWorking = true;

//Js automatically convert var types as compared to other programming languages
//Type Coercion
console.log(firstName + ' ' + lastName + ' '+ age + '. Is she working? '+ isWorking);

//variable mutation
age = 'twienty five';
job = 'driver';

// alert(
// 	firstName + ' ' + lastName + ' ' + age + '. Is she working? ' + isWorking
// );

// var lastName = prompt('what is her last Name?')

console.log(firstName+ ' '+lastName)

//basic operators
var year, ageJo, ageJon;
year = 2020;
ageJo = 24;
ageJon = 28;
//math operators
var yearJo = year - 24;
var yearJon = year - 28;

console.log(yearJon);
console.log(year + 2);

//logical operators
var jonOlder = ageJon > ageJo
console.log(jonOlder)

//typeof operator
console.log(typeof jonOlder)
console.log(typeof ageJon);
console.log(typeof 'I am a software developer');
var x;
console.log(typeof x);

//operator precedence
var now = 2020
var yearSteve = 1990
var fullAge = 18;
//multiple operators
var isFullAge = now - yearSteve >= fullAge;
console.log(fullAge)

var ageJo = 24;
var ageJon = 28;
var average = (ageJo + ageJon) / 2;
console.log(average)

//multiple assignments
var x, y;
x = y = (3 + 5) * 4 -6;

console.log(x, y);

//more operators
x *= 2;
console.log(x);

//increment
// x = x + 1;
// x +=1;
x++;
console.log(x)

//if/else statements
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus == 'married'){
    console.log(firstName + ' is married');
}else{
    console.log(firstName + ' will hopefully marry soon:')
}

//Boolean Logic
var firstName = 'John';
var age=16;

if(age<13){
    console.log(firstName + ' is a boy.')
} else if(age >= 13 && age < 20){ //Between 13 and 20
    console.log(firstName + ' is a teenager.')
}
else{
    console.log(firstName + ' is a man.')
}


//ternary operator and switch statements
//ternary operator
var firstName = 'John';
var age = 16;

age >= 18
	? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drinks juice.'); 
    
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if(age>= 18){
//     var drink = 'beer';
// }else {
//     var drink = 'juice';
// }

//switch statements
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code. ');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber. ');
        break;
    case 'designer':
        console.log(firstName + ' designs website. ');
        break;
    default:
        console.log(firstName + ' does something else. ');
}

age=10;
switch (true) {
	case age < 13:
		console.log(firstName + ' is a boy');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager.');
		break;
	case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
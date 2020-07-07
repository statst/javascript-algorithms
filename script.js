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

//truthy and falsy values and equality operators
//falsy values: undefined, null, 0 '', NaN
//truthy values: Not falsy values

var height;

height = 23;
// height = '';

if (height || height === 0){
    console.log('variable is defined');   
}else{
    console.log('variable has not defined');
}

//Equality operators
if (height == '23'){
    console.log('The == operator does type coercion!')
}

//Functions

function calculateAge(birthYear){
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
console.log(ageJohn, ageMike);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement>0){
        console.log(firstName + ' retires in ' + retirement + ' years');
    }else{
        console.log(firstName + ' is already retired. ');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1970, 'Mike');
yearsUntilRetirement(1969, 'Mary');

//function statements and expressions
//function decoration
//function whatDoYouDo(job, firstName){

//}
//function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code'
        case 'driver':
            return firstName + ' driver at Uber';
        case 'designer':
            return firstName + ' is a web designer';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Mark'));
console.log(whatDoYouDo('retired', 'Mary'));

//Arrays
//initialize new array
var names = ['John', ' Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);

console.log(names.length);

console.log(names[0]);

//mutate array data
names[1] = 'Ben';
console.log(names);

// names[5] = 'Mary';
// console.log(names);

names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

//methods that adds elements to array
//adds at the end
john.push('blue');
//adds at the start
john.unshift('Mr');
console.log(john);

//remove last element
john.pop();
//removes first element
john.shift();
console.log(john);

console.log(john.indexOf(1990));
//if element is not in an array returns -1
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is a Not a designer': 'Jhn is a designer';
console.log(isDesigner)

//objects and properties
//in arrays order matters a lot and in objects order doesen't matter at all
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x ='birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new object syntax
var jane = new Object();
jane.name='Jane';
jane.birthYear=1969;
jane['lastName']='Smith';
console.log(jane);



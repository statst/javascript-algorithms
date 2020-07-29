// console.log("Hello World")

//ES5
//variables and data types
//declare a variable
var firstName= 'Jo';
// console.log(firstName);

//string
var lastName = 'Shinde';

//number
var age = 24;

//boolean
// var myName = true;
// console.log(myName)

// //undefined
// var myAge;
// console.log(myAge);

//variable naming rules
var _3years = 3;
var jobTitle = "Software Developer"
var $experience = 3;

// console.log(_3years);
// console.log(jobTitle);
// console.log($experience)

//variable mutation and type coercion
var firstName = 'Jo';
var lastName = 'Shinde';
var age = 24;
isWorking = true;

//Js automatically convert var types as compared to other programming languages
//Type Coercion
// console.log(firstName + ' ' + lastName + ' '+ age + '. Is she working? '+ isWorking);

//variable mutation
age = 'twienty five';
job = 'driver';

// alert(
// 	firstName + ' ' + lastName + ' ' + age + '. Is she working? ' + isWorking
// );

// var lastName = prompt('what is her last Name?')

// console.log(firstName+ ' '+lastName)

//basic operators
var year, ageJo, ageJon;
year = 2020;
ageJo = 24;
ageJon = 28;
//math operators
var yearJo = year - 24;
var yearJon = year - 28;

// console.log(yearJon);
// console.log(year + 2);

//logical operators
// var jonOlder = ageJon > ageJo
// console.log(jonOlder)

// //typeof operator
// console.log(typeof jonOlder)
// console.log(typeof ageJon);
// console.log(typeof 'I am a software developer');
// var x;
// console.log(typeof x);

//operator precedence
var now = 2020
var yearSteve = 1990
var fullAge = 18;
//multiple operators
var isFullAge = now - yearSteve >= fullAge;
// console.log(fullAge)

// var ageJo = 24;
// var ageJon = 28;
// var average = (ageJo + ageJon) / 2;
// console.log(average)

//multiple assignments
var x, y;
x = y = (3 + 5) * 4 -6;

// console.log(x, y);

//more operators
x *= 2;
// console.log(x);

//increment
// x = x + 1;
// x +=1;
x++;
// console.log(x)

//if/else statements
var firstName = 'John';
var civilStatus = 'single';

// if (civilStatus == 'married'){
//     console.log(firstName + ' is married');
// }else{
//     console.log(firstName + ' will hopefully marry soon:')
// }

//Boolean Logic
var firstName = 'John';
var age=16;

// if(age<13){
//     console.log(firstName + ' is a boy.')
// } else if(age >= 13 && age < 20){ //Between 13 and 20
//     console.log(firstName + ' is a teenager.')
// }
// else{
//     console.log(firstName + ' is a man.')
// }


//ternary operator and switch statements
//ternary operator
var firstName = 'John';
var age = 16;

// age >= 18
// 	? console.log(firstName + ' drinks beer.')
//     : console.log(firstName + ' drinks juice.'); 
    
var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if(age>= 18){
//     var drink = 'beer';
// }else {
//     var drink = 'juice';
// }

//switch statements
// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code. ');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber. ');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs website. ');
//         break;
//     default:
//         console.log(firstName + ' does something else. ');
// }

// age=10;
// switch (true) {
// 	case age < 13:
// 		console.log(firstName + ' is a boy');
// 		break;
// 	case age >= 13 && age < 20:
// 		console.log(firstName + ' is a teenager.');
// 		break;
// 	case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

//truthy and falsy values and equality operators
//falsy values: undefined, null, 0 '', NaN
//truthy values: Not falsy values

// var height;

// height = 23;
// height = '';

// if (height || height === 0){
//     console.log('variable is defined');   
// }else{
//     console.log('variable has not defined');
// }

//Equality operators
// if (height == '23'){
//     console.log('The == operator does type coercion!')
// }

//Functions

// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// console.log(ageJohn, ageMike);

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if(retirement>0){
//         console.log(firstName + ' retires in ' + retirement + ' years');
//     }else{
//         console.log(firstName + ' is already retired. ');
//     }
    
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1970, 'Mike');
// yearsUntilRetirement(1969, 'Mary');

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

// console.log(whatDoYouDo('teacher', 'John'))
// console.log(whatDoYouDo('designer', 'Mark'));
// console.log(whatDoYouDo('retired', 'Mary'));

//Arrays
//initialize new array
var names = ['John', ' Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// console.log(names);

// console.log(names.length);

// console.log(names[0]);

//mutate array data
names[1] = 'Ben';
// console.log(names);

// names[5] = 'Mary';
// console.log(names);

names[names.length] = 'Mary';
// console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

//methods that adds elements to array
//adds at the end
john.push('blue');
//adds at the start
john.unshift('Mr');
// console.log(john);

//remove last element
john.pop();
//removes first element
john.shift();
// console.log(john);

// console.log(john.indexOf(1990));
// //if element is not in an array returns -1
// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is a Not a designer': 'Jhn is a designer';
// console.log(isDesigner)

//objects and properties
//in arrays order matters a lot and in objects order doesen't matter at all
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x ='birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

//new object syntax
// var jane = new Object();
// jane.name='Jane';
// jane.birthYear=1969;
// jane['lastName']='Smith';
// console.log(jane);

//objects and methods
// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1992,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'teacher',
//     isMarried: false,
//     calcAge: function(){
//         this.age= 2018 - this.birthYear;
//     }

// };
// console.log(john.calcAge(1990));
// john.age = john.calcAge()
// console.log(john.age)
// john.calcAge();
// console.log(john);

//loops and iteration

// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

// i =0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// i =2, 2 < 10 true, log i to console, i++
//..
// i = 10, 10 < 10 false, exit the loop!

// var john = ['John', 'Smith', 1990, 'teacher', false];
//for loop
// for (var i =0; i< john.length; i++){
//     console.log(john[i]);
// }

//while loop
// var i =0;
// while(i<john.length){
//     console.log(john[i]);
//     i++;
// }

//continue and break statements

// for (var i = 0; i < john.length; i++) {
//     if(typeof john[i] !== 'string'){
//         continue;
//     } 
// 	console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
// 	if (typeof john[i] !== 'string') {
// 		break;
// 	}
// 	console.log(john[i]);
// }

//looping backwards
// for (var i =john.length - 1; i >= 0; i--){
//     console.log(john[i]);
// }

//advanced javascript: object and functions
//primitives: numbers, strings, booleans, undefined, null
//everything else is object: arrays, functions, dates, objects, wrapping of numbers, strings and booleans

//function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1989,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
// 	console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';
// var john = new Person('John', 1990, 'teacher');

// john.calculateAge();

// var jane = new Person('Jane', 1978, 'designer');
// var mark = new Person('Mark', 1978, 'retired');

// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


//object.create
// var personProto = {
//     calculateAge: function(){
//         console.log(2016 - this.yearOfBirth)
//     }
// };

// var john = Object.create(personProto);

// john.name = 'John'
// john.yearOfBirth = 1990;
// john.job= 'teacher'


// var jane = Object.create(personProto, {
//     name: { value: 'Jane'},
//     yearOfBirth: { value: 1969},
//     job: {value: 'designer'}
// })

//primitives vs objects
//when we pass a primitive into an object a simple copy is created, it will never affect a variable outside
//when we change object inside of a function, it is still reflected outside of a function
//primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// var obj1 = {
//     name: 'John',
//     age: 26
// }

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

//functions
// var age =27;
// var obj = {
//     name: 'Jonas',
//     city: 'Libson'
// }

// function change(a, b){
//     a = 30;
//     b.city = 'San Francisco'
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

//passing functions as argument

// var years = [1990, 1965, 1987, 1945];

// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i< arr.length; i++ ){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el){
//     return 2016 -el;
// }

// function isFullAge(el){
//     return el >= 18;

// }

// function maxHeartReate(el){
//     if (el >= 18 && el <= 81){
//         return Math.round(205.9 - 8.67 * el);
//     }else{
//         return -1;
//     }
    
// }

// var rates = arrayCalc(ages, maxHeartReate);
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge)
// console.log(ages);
// console.log(fullAges);

//functions returning functions

// function interViewQuestion(job){
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     } else if(job === 'teacher'){
//         return function(name){
//             console.log('What is subject do you teach, ' + name + '?')
//         }
//     } else {
//         return function(name){
//             console.log('Hello ' + name + ', what do yo you do?')
//         }
//     }
// }

// var teacherQuestion = interViewQuestion('teacher');
// var designerQuestion = interViewQuestion('designer');
// teacherQuestion ('john');
// designerQuestion ('john');
// designerQuestion ('jane');

// interViewQuestion('teacher')('Mark');

//immedietly invoked function expressions

// function game(){
//     var score = Math.random() + 18;
//     console.log(score >= 5);
// }

// game();

// (function game() {
// 	var score = Math.random() + 18;
// 	console.log(score >= 5);
// })();

// console.log(score);

// (function game() {
// 	var score = Math.random() + 18;
// 	console.log(score >= 5 - goodluck);
// })(5);


//closures
// function retirement(retirementAge){
//     var a = ' years left until retirement '
//     return function(yearOfBirth){
//         var age = 2016 - yearOfBirth
//         console.log((retirementAge - age) + a)
//     }
// }

// var retirementUs = retirement(66);

// retirementUs(1990);
// retirement(66)(1990);


// function solution(number){
//     let sum=0;
//     for(let i=0; i<number; i++){
//         if (i%3 == 0 || i%5 == 0){
//         return sum = sum + i;
//         }
//     }
//     console.log(sum);
// }

// console.log(solution(3,5,6,9));


// function solution(number){
// var sum = 0;
// for (i = 0; i < 1000; i++) {
// 	if (i % 3 == 0 || i % 5 == 0) {
// 		sum = sum + i;
// 	}
// }
// return sum;
// }

// console.log(solution())

// function list(names) {
// 	let str = '';
// 	if (names.length !== 0) {
// 		let last = names.pop();
// 		str = names
// 			.map((val, i, arr) => {
// 				if (i !== arr[arr.length - 1]) {
// 					return val.name;
// 				}
// 			})
// 			.join(', ');

// 		str += str !== '' ? ' & ' + last.name : last.name;
// 	}

// 	return str;
// }


//Given the triangle of consecutive odd numbers:
//Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

//rowSumOddNumbers(1); // 1
//rowSumOddNumbers(2); // 3 + 5 = 8
// function rowSumOddNumbers(n) {
// 	// TODO
// 	return n ** 3;
// }


// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// function towerBuilder(nFloors) {
//   let arr=[];
//   for(var i = 0; i< nFloors; i++){
//    arr[i]="";
//    for(var j = 0; j< nFloors-i-1; j++){
//      array[i]+=" ";
//    }
//    for(var d=nFloors-i-1; d<nFloors+i; d++){
//      arr[i]+="*";
//    }
//    for(var k=nFloors+i; k<2*nFloors-1; k++){
//      arr[i]+=" ";
//    }
//   }
//   return arr
// }


// reduce helper
var numbers = [10, 20, 30];
var sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

numbers.reduce(function(sum, number) {
    return sum + number;
}, 0)


var primaryColors = [
    { color: 'red' }, 
    { color: 'yellow' },
    { color: 'blue' }
];

//['red', 'yellow', 'blue']

primaryColors.reduce(function(previous, primaryColor){
    previous.push(primaryColor.color);

    return previous;
}, []);


function balancedParens(string) {
    return !string.split("").reduce(function(previous, char){
        if (char === "(" ){
            return ++previous
        }
        if(char == ")"){
            return --previous
        }
        return previous;

    }, 0)
}

console.log(balancedParens("(abcdefg(()"))
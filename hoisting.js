//how javascript works behind the scene
//lecture hoisting

//hoisting only works for function decoration
calculateAge(1965);
function calculateAge(year){
    console.log(2016 - year);
}

//hoisting doesn't work with function expression
var retirement = function(year){
    console.log(65 - (2016-year));
}
retirement(1990);

//variables
var age = 23;
console.log(age);

function foo(){
    var age = 65;
    console.log(age)
}

foo();
console.log(age);

//scoping and the scope chain
var a = "Hello!";
first();

function first(){
    var b = "Hi!";
    second();
    function second(){
        var c = "Hey!";
        third()
    }
}
function third(){
    var d = 'John';
    console.log(a + d);
}

//this keyword
// console.log(this)
calculateAge(1985)
function calculateAge(year){
    console.log(2016 - year);
    console.log(this);
}

var john={
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        function innerFunction(){
            console.log(this)
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
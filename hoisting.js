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
console.log(age)
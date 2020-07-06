/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/
//Store Mark's and John's mass and height in variables
var markHeight = 5;//ft
var johnHeight = 4;//ft
var markMass = 92;//kg
var johnMass = 78;
// Calculate both their BMIs

var bmiMark = markMass / markHeight^2;
var bmiJohn = johnMass / johnHeight^2;
if (markMass > johnMass){
    console.log('Mark\' BMI is higher than John\'s.' )
}else{
    console.log("John' BMI is higher than Mark's.");
}
// console.log(bmiMark, bmiJohn)
// var isTrue = bmiMark > bmiJohn

// console.log( 'Is Mark\'s BMI higher than John\'s?' + ' ' + isTrue);

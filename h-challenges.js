// Objective
// In this challenge, we review some basic concepts that will get you started with this series. You will need to use the same (or similar) syntax to read input and write output in challenges throughout HackerRank. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// To complete this challenge, you must save a line of input from stdin to a variable, print Hello, World. on a single line, and finally print the value of your variable on a second line.

// You've got this!

// Note: The instructions are Java-based, but we support submissions in many popular languages. You can switch languages using the drop-down menu above your editor, and the  variable may be written differently depending on the best-practice conventions of your submission language.

// Input Format

// A single line of text denoting  (the variable whose contents must be printed).

// Output Format

// Print Hello, World. on the first line, and the contents of  on the second line.

// Sample Input

// Welcome to 30 Days of Code!
// Sample Output

// Hello, World. 
// Welcome to 30 Days of Code!
// Explanation

// On the first line, we print the string literal Hello, World.. On the second line, we print the contents of the  variable which, for this sample case, happens to be Welcome to 30 Days of Code!. If you do not print the variable's contents to stdout, you will not pass the hidden test case.
function processData(inputString) {
    // This line of code prints the first line of output
    // let inputString = " "
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
   console.log(inputString);
    
}


// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });


// 



// Challenge 2

// Objective
// Today, we're discussing data types. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Complete the code in the editor below. The variables , , and  are already declared and initialized for you. You must:

// Declare  variables: one of type int, one of type double, and one of type String.
// Read  lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
// Use the  operator to perform the following operations:
// Print the sum of  plus your int variable on a new line.
// Print the sum of  plus your double variable to a scale of one decimal place on a new line.
// Concatenate  with the string you read as input and print the result on a new line.
// Note: If you are using a language that doesn't support using  for string concatenation (e.g.: C), you can just print one variable immediately following the other on the same line. The string provided in your editor must be printed first, immediately followed by the string you read as input.

// Input Format

// The first line contains an integer that you must sum with .
// The second line contains a double that you must sum with .
// The third line contains a string that you must concatenate with .

// Output Format

// Print the sum of both integers on the first line, the sum of both doubles (scaled to  decimal place) on the second line, and then the two concatenated strings on the third line.

// Sample Input

// 12
// 4.0
// is the best place to learn and practice coding!
// Sample Output

// 16
// 8.0
// HackerRank is the best place to learn and practice coding!
// Explanation

// When we sum the integers  and , we get the integer .
// When we sum the floating-point numbers  and , we get .
// When we concatenate HackerRank with is the best place to learn and practice coding!, we get HackerRank is the best place to learn and practice coding!.

// You will not pass this challenge if you attempt to assign the Sample Case values to your variables instead of following the instructions above and reading input from stdin.


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split('\n');
	main();
});

// Reads complete line from STDIN
function readLine() {
	return input_stdin_array[input_currentline++];
}

unction main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var intNum = 12
    var num = 4.0
    var str = "is the best place to learn and practice coding!"
 
    // Read and save an integer, double, and String to your variables.
    intNum = parseInt(readLine());
    num = parseFloat(readLine())
    str = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(intNum + i);
    // Print the sum of the double variables on a new line.
    console.log((num + d).toFixed(1));
    // Concatenate and print the String variables on a new line
    console.log(s + str);
    // The 's' variable above should be printed first.

}

//Array-Sum Operation in javascript

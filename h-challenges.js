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
// You have an identity permutation of  integers as an array initially. An identity permutation of  integers is . In this task, you have to perform  operations on the array and report the sum of the elements of the array after each opertion.

// The  operation consists of an integer .

// If the array contains , swap the first and last elements in the array.
// Else, remove the last element of the array and push  to the end of the array.
// Input Format

// The first line contains two space separated integers  and .
// Then,  lines follow denoting the operations .
// Constraints

// 2  N, M  
// 1    5 * 
// Output Format

// Print  lines, each containing a single integer denoting the answer to each of the  operations.

// Sample Input 0

// 3 2
// 4
// 2
// Sample Output 0

// 7
// 7
// Explanation 0

// Initially the array is .

// After the 1st operation, the array becomes  as  = 4, as  is not present in the current array, we remove  and push  to the end of array and hence, .

// After 2nd operation the array becomes  as  = 2, as  is present in the current array, we swap  and  and hence, .



function performOperations(N, op) {
    console.log(N,op)
    // Write your code here
    let arr = [];
    let first = 1;
    let last = N;
    let sum = Math.ceil( ((N-2) * (N+1)) / 2);
    for(let i =0; i < op.length; i++){
        let btn = !(op[i] >= 2 && op[i] <= N-1);
        if( first!= op[i] && last != op[i] && btn) {
            last = op[i];
        }else {
            let n = first;
            first = last;
            last = n;
        }
        arr.push(sum + first + last);
    }
    return arr;

}



// You have been provided with two integers  and . Your task is to construct an undirected tree of  nodes such that it has score exactly equal to .




// The score of a tree is defined to be the sum of distance of each node from the root node. Node  is the root of the tree. If there is no such tree possible print out a single edge containing ""

// For example, for the following tree:

// image

// Score would be: , which is the sum of distance of each node.

// If there are multiple possible answers, print any of them.

// Input Format

// The first line contains a single integer  denoting the number of test cases.

// The first and only line of each test case contains two space separated integers,  and .

// Constraints




// Sum of  over all the test cases do not exceed 

// Output Format

// For each test case,

// If such a tree is possible, print  lines each containing two space separated integers  and  denoting an edge between node  and node . The output edges must form a tree which is connected and have no multi edges or loops.

// Else, print a single line containing ""

// Sample Input 0

// 1
// 5 7
// Sample Output 0

// 1 2
// 1 3
// 3 4
// 4 5
// Explanation 0

// One of the possible answers is:

// image

// The sum of distances here is 

// Sample Input 1

// 2
// 5 6
// 3 1
// Sample Output 1

// 1 2
// 1 3
// 3 4
// 3 5
// -1 -1
// Explanation 1

// For the first test case, one of the possible answers is:

// image

// The sum of distances here is .

// For the second test case, we can see that there is no such tree possible. Hence we need to print ""



function partsSums(ls) {
let sum = ls.reduce((sum, n) => sum + n, 0)
    res  = [sum]
    for (let i = 1; i <= ls.length; i++){
        sum -= ls[i-1]
        res.push(sum )
    }
    return res
}
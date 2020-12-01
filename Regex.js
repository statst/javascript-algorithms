let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(/coding/); 

//Find More Than the First Match
//To search or extract a pattern more than once, we can use the g flag.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 

//Match Anything with Wildcard Period


function findLongestWordLength(str) {
let largest=0
let str1 = str.split(' ');
for(let i=0; i<str1.length; i++){
    if(str1[i].length >largest){
    largest = str1[i].length
}
}
    return largest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
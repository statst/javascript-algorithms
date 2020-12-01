function mutatedArr(arr1, arr2){
    return arr1.push(arr2)
}

function unMutatedArr(arr1, arr2){
    return arr1.concat(arr2)
}
let arr=[1,2,3,4,5]

arr.push(7,8,9,10)

console.log("mutated array", arr)

let myArr = [1, 2, 3, 4, 5];

myArr.concat(7, 8, 9, 10);

console.log("non-mutated", myArr);
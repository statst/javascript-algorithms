
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
    let arr1 = arr.sort(function(a,b){
    return a-b
    })
        for(let i=0; i<arr1.length; i++){
            if(arr1[i] >= num){
            return i
        }
    }
    return arr1.length;
}

getIndexToIns([40, 60], 50);
function mergeSort(arr){
    if(arr.length<=1 ) return arr;
    let mid = Math.floor(arr.length/2);
    let l = mergeSort(arr.slice(0, mid));
    let r = mergeSort(arr.slice(mid));
    return merge( l, r);   
}

function merge(l, r){
    let result = [];
    while(l.length && r.length){
        if(r[0] > l[0]){
            result.push(l.shift())
        } else {
            result.push(r.shift())
        }
    }
return [...result, ...l, ...r];
}
console.log(mergeSort([1,2,3,4,5,6]))
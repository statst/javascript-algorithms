let arr = [1,2,3,4,5,6]

function array(arr){
  for(let i=0; i< arr.length-1; i++){
    // console.log(i);
    console.log(arr[i+1]);
  }
  console.log(arr)
}


console.log(array(arr))
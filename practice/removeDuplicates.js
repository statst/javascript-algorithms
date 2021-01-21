function removeDuplicates(arr){
  let i =0;
  let j=0;
  while(j< arr.length){
    if (arr[i] !== arr[j]){
      i++
      nums[i] = nums[j]
      j++
    }else{
      j++
    }
  }
  return i+1;
}
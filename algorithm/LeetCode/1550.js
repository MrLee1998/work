var threeConsecutiveOdds = function(arr) {
  let len = arr.length
  for( let i=2; i<len; i++) {
    let j = i
    if ( arr[j - 2] % 2 != 0 && arr[j - 1] % 2 != 0 && arr[j] % 2 != 0 && len >= 3){
      return true
    }
  }
  return false
};
let arr = [1,2]
console.log(threeConsecutiveOdds(arr));
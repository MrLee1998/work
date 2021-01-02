var countGoodTriplets = function(arr, a, b, c) {
  let res = 0;
  let len = arr.length;
  if(len < 3) return 0;
  for(let i = 0; i < len - 2; i++) {
    for(let j = i + 1; j < len - 1; j++) {
      for(let k = j + 1; k < len; k++) {
        let que1 = Math.abs(arr[i] - arr[j])
        let que2 = Math.abs(arr[j] - arr[k])
        let que3 = Math.abs(arr[i] - arr[k])
        if(que1 <= a && que2 <= b && que3 <= c) {
          res++
        }
      }
    }
  }
  return res
};

let arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3;
console.log(countGoodTriplets(arr, a, b, c));
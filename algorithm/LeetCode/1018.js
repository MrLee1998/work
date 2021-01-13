var prefixesDivBy5 = function(A) {
  let arr = [], res = A[0];
  arr[0] = res === 0
  // let lastNum = A[0];
  for(let i = 1; i < A.length; i++) {
    // res = A[i] + res * 2
    // arr.push(res % 5 === 0 ? true : false)
    // res = res % 10
    res *= 2
    if(A[i] === 1) {
      res++
    }
    res = res + ''
    res = res[res.length - 1] * 1
    arr[i] = res === 0 || res === 5
  }
  return arr
};

let A = [0, 1, 1] 
console.log(prefixesDivBy5(A));
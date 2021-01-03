var arrayRankTransform = function(arr) {
  let res = [];
  let newArr = [... new Set(arr.slice().sort((a, b) => {
    return a - b
  }))]
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < newArr.length; j++) {
      if(arr[i] === newArr[j]) {
        res.push(j+1)
        break;
      }
    }
  }
  return res
};
let arr = [37,12,28,9,100,56,80,5,12]
console.log(arrayRankTransform(arr));
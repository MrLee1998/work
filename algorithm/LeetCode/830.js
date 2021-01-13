var largeGroupPositions = function(s) {
  if(s.length < 3) return
  let rag = s.matchAll(/([a-z])\1{2,}/g)
  let res = []
  let temp;
  while(temp = rag.next().value) {
    res.push([temp.index, temp.index + temp[0].length -1] || [])
  }
  return res
};

let s = "abbxxxxzzy";
console.log(largeGroupPositions(s));
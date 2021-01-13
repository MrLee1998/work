var longestCommonPrefix = function(strs) {
  if(!strs.length) return ''
  let ans = strs[0]
  for(let i = 1; i < strs.length; i++) {
    for(var j = 0; j < ans.length && j < strs[i].length; j++) {
      if(ans[j] != strs[i][j]){
        break
      }
    }
    ans = ans.substr(0, j)
    if(ans === '') return ''
  }
  return ans
};
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));
console.log(strs[0][1]);
console.log(strs.length);
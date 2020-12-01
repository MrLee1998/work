var merge = function(nums1, m, nums2, n) {
  let len1 = nums1.length,
      len2 = nums2.length;
      console.log(len1, len2);
  if(len1 >= m + n && len2 >=n ){
    for(let i = m; i < m+n; i++){
      let j = i - m ;
      nums1[i] = nums2[j]
    }
    return nums1.sort( (a,b)=> {return a-b})
  }
  return false
};
let nums1 = [1,2,3,0,0,0,0,2,3],
    m = 3;
let nums2 = [2,5,6],
    n = 3;
console.log(merge(nums1, m, nums2, n));
var intersection = function(nums1, nums2) {
    let map = new Map() //{key； value}
    let set = new Set() // {value1,value2}  其中的值不可重复
    nums2.forEach((item) => {
        map.set(item,true)
    })
    for (let num of nums1) {
        if(map.has(num)){
            set.add(num) 
        }
    }
    return Array.from(set.values())
};
let nums1 = [1,2,1,2],
    nums2 = [2,2,1];
console.log(intersection(nums1, nums2));
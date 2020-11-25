var majorityElement = function(nums) {
    let arrLen = nums.length
    let len = Math.ceil(arrLen/2)
    let obj = {}
    for(let i of nums){
        if(obj.hasOwnProperty(i)){  // 判断自己是否有该属性 
            obj[i]++
        }
        else {
            obj[i] = 1
        }
        // return obj
    }
   
    for(let j in obj){
        if(obj[j]>=len){
            return j 
        }
    }
    return -1
};
let nums = [4,3,3]
console.log(majorityElement(nums));
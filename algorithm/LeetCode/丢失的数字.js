var missingNumber = function (nums) {
    let n = nums.length
    let add1 = 0,
        add2 = 0;
    for (let i = 0; i < n+1; i++) {
        add1 += i;
        add2 += (nums[i] || 0);
    }
    return add1 - add2;
};
var smallerNumbersThanCurrent = function(nums) {
    var nums;
    var m;
    var arr = new Array;

    for (var i = 0; i < nums.length; i++) {
        m = 0
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                m++
            }
        }
        arr.push(m)
    }
    console.log(arr);
};
var nums = [8, 1, 2, 2, 3, 9]
smallerNumbersThanCurrent(nums)
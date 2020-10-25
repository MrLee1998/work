var twoSum = function(nums, target) {
    var nums = [2, 7, 11, 15],
        target = 9;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log('[' + i + ',' + j + ']');
                return [i, j];
            } else {
                // console.log('没有结果');
                return false;
            }
        }
    }
}
twoSum();
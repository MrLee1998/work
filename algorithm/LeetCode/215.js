function partition(arr, left, right){
    let i= left, j= right;
    let privt = arr[i]
    while(i < j){
        while(i<j && arr[i]>=privt){
            j--
        }
        arr[i] = arr[j]
        while(i<j && arr[i]<=privt){
            i++
        }
        arr[j] = arr[i]
    }
    arr[i] = privt;
    return i;
}
var findKthLargest = function(nums, k) {
    let left = 0, right = nums.length-1;
    let target = right - k;
    let i = partition(nums, left, right);
    while(i !== target) {
        if(i < target){ 
            left = i + 1
        }else {
            right = i - 1
        }
        i = partition(nums, left, right)
    }
    console.log(i);
    return nums[i];

};
console.log(findKthLargest([3,2,1,5,6,4],2));
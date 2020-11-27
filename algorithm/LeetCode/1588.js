var sumOddLengthSubarrays = function (arr) {
    let len = arr.length;
    let result = 0;
    let start = 0;
    let end = 1, k = 0;
    let newArr;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len + 1; j++) {
            newArr = arr.slice(i, j)
            for (let m = 0; m < newArr.length; m++) {
                result = result + newArr[m]
            }
            k++;
            j++

        }
    }
    return result
}
let arr = [1,4,2,5,3]
// console.log(arr.slice(0,1));
console.log(sumOddLengthSubarrays(arr));
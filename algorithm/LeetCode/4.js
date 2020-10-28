var uniqueOccurrences = function(arr) {
    var arr;
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[i] == arr[j] && i != j && i > j) {
                num++
                console.log(arr[i] + '有相同数' + num + '个');
                // num.push(arr[j])
                // console.log(num);
                // continue


            }
        }
    }
};
var arr = [1, 2, 2, 1, 1, 3]
uniqueOccurrences(arr)
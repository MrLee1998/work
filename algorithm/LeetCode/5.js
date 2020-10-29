var addNum = function(num1, num2) {
    var num1;
    var num2;
    var arr1 = [];
    var arr2 = [];

    // for (var i = 0; i < num1.length; i++) {
    //     arr1 += pop(num1[i]);
    //     arr2 += pop(num2[i]);
    // }
    while (num1.length > 0 && num2.length > 0) {
        arr1 += num1.pop();
        arr2 += num2.pop();
    }
    console.log(arr1);
    console.log(arr2);
    console.log(Number(arr1) + Number(arr2));
    console.log(num1);
    console.log(num2);
}
var num1 = [1, 2, 3, 9, 8]
var num2 = [1, 2, 3, 7, 0]
addNum(num1, num2)
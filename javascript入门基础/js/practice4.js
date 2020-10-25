var longestMountain = function() {
    var A = [2, 1, 4, 7, 3, 2, 5];
    var leftA = [],
        rightA = [];
    var maxNum = A[0];
    for (var i = 0; i < A.length; i++) {
        if (maxNum < A[i]) {
            maxNum = A[i]
        }
        if (maxNum == A[i]) {
            var j = i
        }
    }
    for (var i = 0; i < A.length; i++) {
        if (A[i] < A[i + 1] && i <= j) {
            leftA.push(A[i])
        }
    }
    for (var i = 0; i < A.length; i++) {
        if (A[i] > A[i + 1] && i >= j) {
            rightA.push(A[i + 1])
        }
    }

    console.log(maxNum);
    console.log(leftA);
    console.log(rightA);
    console.log(leftA.length + rightA.length + 1);

};
longestMountain();
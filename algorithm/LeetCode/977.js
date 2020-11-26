var sortedSquares = function(A) {
    let newA = A.map(x => x*x)

    return newA.sort(function(a,b) {
        return a-b
    })
};
let A = [-4,-1,0,3,10]
console.log(sortedSquares(A.sort()));
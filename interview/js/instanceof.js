let arr = [] 
// arr instanceof Array
function instanceof_fun (L,R) {
    L = L.__proto__
    let O = R.prototype
    while(true) {
        if( L === null) {
            return false
        }
        if(L === O ){
            return true
        }
        L = L.__proto__
    }
    
    // else {
    //     return false
    // }
}
console.log(instanceof_fun(arr,Object));
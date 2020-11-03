
function add(){
    var count=0;
    function num(){
        count++;
        console.log(count);
    }
    return num
}
var a=add()
a()
a()
a()
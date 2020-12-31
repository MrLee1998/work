function test(){
    var food = 'apple'
    function a(){
        console.log(food);
        food='banana'
    }
    function b(){
        console.log(food);
    }
    return a
}
console.log(test());
test()

function fruit() {
    var food = 'apple'
    var obj = {
        eatFood: function() {
            if(food!=''){
                console.log('eating ' + food);
                food = ''
            }else{
                console.log('nothing');
            }
        },
        pushFood: function (myfood) {
            food=myfood
        }
    }
    return obj  // 将friut = obj  调用obj 里的函数 形成闭包 
}
var person=fruit()
var food='banana'
person.eatFood()
person.eatFood()
person.pushFood(food)
person.eatFood()


function test(){
    var food = 'apple'
    function a(){
        console.log(food);
        food='banana'
    }
    function b(){
        console.log(food);
    }
}
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
    return obj
}
var person=fruit()
var food='banana'
person.eatFood()
person.eatFood()
person.pushFood(food)
person.eatFood()


var obj1 = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 当obj1 调用getAge()的时候 this指向obj1 b = 1990
        var fn = () => new Date().getFullYear() - b; // this指向obj对象  谁调用this就指向谁
        return fn();
    }
};
console.log(obj1.getAge());; // 30
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};
console.log(obj.getAge());; // NaN

var obj3 = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth; // 1990
        var fn = (y) => y - this.birth; // this.birth仍是1990
        return fn.call({birth:2000}, year);
    }
};
console.log(obj3.getAge(2015));; // 25
'use strict'
var arr = [10, 20, 1, 2];
arr.sort((x, y) => {
    return x-y
});
console.log(arr); // [1, 2, 10, 20]
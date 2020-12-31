var a = 'a';
function foo() {
    console.log(a);
}
function bar() {
    var a = 'a1'
    foo()  // 获取值 跟调用位置无关 跟声明的位置有关
}

bar()
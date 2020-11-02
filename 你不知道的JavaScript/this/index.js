function identify(context){
    return context.name.toUpperCase()  // toUpperCase把小写字母转化为大写
}
function speak(context){
    var greeting='hello i`m' + indentify(context)
    console.log(greeting);
}
var me={
    name: 'wn'
}
var you= {
    name: 'peipei'
}
speak(me)
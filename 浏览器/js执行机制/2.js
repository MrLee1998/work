//  栈溢出

// 1. 当javascript执行全局代码的时候， 
// 一定会编译全局代码， 并创建全局执行上下文
// 并且全局上下文只有一份

//  2. 当一个函数被调用函数体内代码会被编译， 
// 创建函数执行上下文， 函数执行结束之后， 
// 创建的函数执行上下文会被销毁

//  3. 当使用eval函数时， eval的代码会被编译， 
// 并创建执行上下文


//  调用栈
//  用来管理 函数调用 关系的一种数据解构


//  栈溢出
//  调用栈是有大小的
"use strict";
exports.__esModule = true;
// 测试驱动开发 TDD
var Queue_1 = require("../lib/Queue");
var names = ['张三', '李四', '王五', '老六', '老七', '老八', '老九'];
// const result = hotPotato(names, 9);
var queue = new Queue_1["default"]();
queue.enqueue('队列的第一条数据');
queue.enqueue('队列的第二条数据');
queue.enqueue('队列的第三条数据');
queue.enqueue('队列的第四条数据');
queue.enqueue('队列的第五条数据');
queue.dequeue();
console.log(queue.size());
console.log(queue.toString());
console.log(queue.isEmpty());

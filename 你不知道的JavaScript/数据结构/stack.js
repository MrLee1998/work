// const arr = [1, 2]
// // arr.unshift(0)
// arr.splice(1, 0, 4)
// console.log(arr);

// stack
const stack = []
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
while(stack.length) {
  const top = stack[stack.length - 1]
  console.log(top);
  stack.pop()
}
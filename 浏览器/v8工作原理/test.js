let jack = {
  name: 'jack.ma',
  age: 40,
  like: {
    dog: {
      color: 'red',
      age: 2
    },
    cat: {
      color: 'white',
      age: 3
    }
  }
}

function copy(src) {
  let dest;
  dest = JSON.parse(JSON.stringify(src))
  //  实现拷贝代码 将src的值完整的拷贝给dest
  return dest
}

let jack2 = copy(jack)
jack2.like.dog.color = 'pink'
console.log(jack.like.dog.color); // red
console.log(jack2.like.dog.color); // pink
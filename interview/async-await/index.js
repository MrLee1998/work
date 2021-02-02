function getJson() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(2);
      resolve(999)
    }, 2000)
  })
  
}
// async function testAsync() {
  // let data = await getJson()
//   await getJson()
//   console.log(3);
//  console.log(data)
// }

function testAsync() {
  return Promise.resolve().then(() => {
    // await getJson()
    return getJson()
  }).then((res) => {
    let data = res
    console.log(3);
    console.log(data)
  })
}
testAsync()


function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a');
    },1000)
  })
}
function b() {
  setTimeout(() => {
    console.log('b');
  },500)
}
function c() {
  console.log('c');
}
function a() {
  return new Promise ((resolve, reject) => {
    
    setTimeout( () => {
      console.log('aaa');
      resolve()
      // reject()
    }, 1000)
    
  })
}
function b() {
  setTimeout( () => {
    console.log('bbb');
  })
}
// b().then(b)
a().then(b) // resolve()
// a().catch(b) // reject()

function sleep(ms) {
  var template = new Promise(resolve => {
    console.log(111);
    setTimeout(resolve, ms)
  })
  return template
}
sleep(1000).then(res => {
  console.log(res);
})
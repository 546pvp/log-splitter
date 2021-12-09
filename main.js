function split(symbol, times) {
  let i = 0
  let czv = ""
  
  while (i < times) {
    czv += symbol
    i++
  }
  console.log(czv)
}

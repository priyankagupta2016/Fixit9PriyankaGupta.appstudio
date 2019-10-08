function addTwo(n1,n2) {
  return n1 + n2
  }
function multiplyTwo(n1,n2) {
  return n1 * n2
  }
var answer = 0


btnAdd.onclick=function(){
  lblAnswer.value = addTwo(inptNumber.value,inptNumber2.value)
}

btnMultiply.onclick=function(){
  lblAnswer.value = multiplyTwo(inptNumber.value,inptNumber2.value)
}

btnReset.onclick=function(){
  lblAnswer.value = ""
}

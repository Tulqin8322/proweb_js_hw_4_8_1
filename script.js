var text = prompt("harf yoki matn kiriting");
var son = +prompt("qancha takrorlash uchun son kiriting");

function takrorlash(text, son) {
  let takrorMatn = "";
  for (let i = 0; i < son; i++) {
    if (i == son - 1) {
      takrorMatn = takrorMatn + text;
    } else {
      takrorMatn = takrorMatn + text + "-";
    }
  }
  return takrorMatn;
}

console.log(takrorlash(text, son));

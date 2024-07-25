let expression = "0";

document.getElementById("exp").innerHTML = expression;


let un = document.getElementById("un");
un.addEventListener('click',()=>{
  let exp = document.getElementById("exp");
  exp.innerHTML;
  if(exp.innerHTML === "0"){
    re = exp.firstChild;
    exp.removeChild(re);
  }
  let child = document.createTextNode("1");
  exp.appendChild(child);
  maxlong();
});

let deux = document.getElementById("deux");
deux.addEventListener('click',()=>{
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("2");
  exp.appendChild(child);
});

let tois = document.getElementById("trois");
trois.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("3");
  exp.appendChild(child);
});

let quatre = document.getElementById("quatre");
quatre.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("4");
  exp.appendChild(child);
});

let cinq = document.getElementById("cinq");
cinq.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("5");
  exp.appendChild(child);
});

let six = document.getElementById("six");
six.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("6");
  exp.appendChild(child);
});

let sept = document.getElementById("sept");
sept.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("7");
  exp.appendChild(child);
});

let huit = document.getElementById("huit");
huit.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("8");
  exp.appendChild(child);
});

let neuf = document.getElementById("neuf");
neuf.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("9");
  exp.appendChild(child);
});

let zero = document.getElementById("zero");
zero.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  let child = document.createTextNode("0");
  exp.appendChild(child);
});

let point = document.getElementById("point");
point.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  let child = document.createTextNode(".");
  exp.appendChild(child);
});

let divi = document.getElementById("divi");
divi.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("/");
  exp.appendChild(child);
});

let plus = document.getElementById("plus");
plus.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("+");
  exp.appendChild(child);
});

let moin = document.getElementById("moin");
moin.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("-");
  exp.appendChild(child);
});

let multi = document.getElementById("multi");
multi.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
  re = exp.firstChild;
  exp.removeChild(re);
}
  let child = document.createTextNode("*");
  exp.appendChild(child);
});

let reset = document.getElementById("reset");
reset.addEventListener('click',()=>{
  document.getElementById("exp").innerHTML = "0"
});

let egale = document.getElementById("egale");
egale.addEventListener('click',()=>{
  result = document.getElementById("exp");
  r = result.innerHTML;
  try {
    resultat = eval(r);
    result.innerHTML = resultat.toString();
  } catch (newException) {
    result.innerHTML = "SyntaxError";
  }
});

let para1 = document.getElementById("para1");
para1.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
    re = exp.firstChild;
    exp.removeChild(re);
  }
  let child = document.createTextNode("(");
  exp.appendChild(child);
});

let para2 = document.getElementById("para2");
para2.addEventListener('click', () => {
  let exp = document.getElementById("exp");
  if (exp.innerHTML === "0") {
    re = exp.firstChild;
    exp.removeChild(re);
  }
  let child = document.createTextNode(")");
  exp.appendChild(child);
});
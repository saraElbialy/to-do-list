let pep = document.querySelectorAll("p");
let sk = [];
   
let input = document.querySelector(".input");
let tasks = document.querySelector(".tasks");
let add = document.querySelector(".add");

add.onclick = function () {
  console.log(input.value);
  let i = input.value;
  addP(i);
  lo(i);
  input.value = "";
  input.focus();
};

let addP = function (i) {
  let texI = document.createTextNode(i);
  let p = document.createElement("p");
  p.style.cssText =
    "margin:20px;padding:10px;width:60%;border-radius:20px;background-color:white;display:inline-block";
  tasks.appendChild(p);
  p.setAttribute("index", i);
  p.appendChild(texI);
  let btn = document.createElement("button");
  tasks.appendChild(btn);
  let txt = document.createTextNode("delete");
  btn.appendChild(txt);
  btn.setAttribute("index", i);
  btn.classList.add("del");
  btn.style.cssText =
    "padding:10px;background-color:red;border-radius:20px;color:white;margin-right:20px;cursor:pointer;border:none;display:inline-block";
};
if (window.localStorage.skill) {
  let sto = JSON.parse(localStorage.getItem("skill"));
  for (i = 0; i < sto.length; i++) {
    addP(sto[i]);
    sk = sto;
  }
}
// add to local storage
function lo(skill) {
  sk.push(skill);
  window.localStorage.setItem("skill", JSON.stringify(sk));
}
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    console.log(e.target.getAttribute("index"));

    let gg = document.querySelector(
      `[index="${e.target.getAttribute("index")}"]`
    );

    gg.remove();
    e.target.remove();
    console.log(sk.indexOf(e.target.getAttribute("index")));
    sk.splice(sk.indexOf(e.target.getAttribute("index")), 1);
    console.log(sk);
    window.localStorage.removeItem("skill");
    window.localStorage.setItem("skill", JSON.stringify(sk));
  } 
});
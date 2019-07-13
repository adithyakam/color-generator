  var _=require('lodash')
   
  var arr=[1,2,3,4,5];

console.log('answer:',_.without(arr,3));
let c1=document.getElementById("color1");
let c2=document.getElementById("color2");
let bg=document.getElementById("bg");
var css = document.querySelector("h3");


function change1()
{
    console.log(c1.value);
   bg.style.background="linear-gradient(to right, "+c1.value+", "+c2.value+")";
   css.textContent = bg.style.background + ";";

}
  


c1.addEventListener("input",change1);
c2.addEventListener("input",change1);


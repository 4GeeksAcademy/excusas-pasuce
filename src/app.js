import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //sujeto verbo predicado
  let sujeto= ["Mi maestro","Mi perro", "Pedro","Mi hermano"]
  let verbo=["comio","bebio","corrio","salto"]
  let predicado=["en la escuela","en la casa","en el parque","en la calle"]

  let Randomsujeto= Math.floor(Math.random()*sujeto.length);
  let Randomverbo= Math.floor(Math.random()*verbo.length);
  let Randompredicado= Math.floor(Math.random()*predicado.length);

  let resultado= `${sujeto[Randomsujeto]} ${verbo[Randomverbo]} ${predicado[Randompredicado]}`
  
  document.getElementById("excusa").innerHTML = resultado;

  console.log(resultado);
  console.log(sujeto[Randomsujeto]);
  console.log(verbo[Randomverbo]);
  console.log(predicado[Randompredicado]);
  console.log(Math.floor(Math.random()*sujeto.length));
  console.log(Math.floor(Math.random()*verbo.length));
  console.log(Math.floor(Math.random()*predicado.length));
  console.log(Math.floor(Math.random()*sujeto.length));
  console.log(Math.floor(Math.random()*sujeto.length));
  console.log(Math.floor(Math.random()*sujeto.length));
  console.log(Math.floor(Math.random()*sujeto.length));
  console.log(Math.floor(Math.random()*sujeto.length));
  console.log(Math.floor(Math.random()*sujeto.length));     

  console.log("Hello Rigo from the console!");
};

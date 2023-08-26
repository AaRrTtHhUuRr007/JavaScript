//encontrando elementos 
const elementoPorId1= document.getElementById("id")
console.log(elementoPorId1);
console.log(elementoPorId1.id);
console.log(elementoPorId1.innerHTML);
elementoPorId1.innerHTML= "Alterando o html"

const elementoPorId2 = document.querySelector("#id")
console.log(elementoPorId2);

const elementoPorClasse1 =document.getElementsByClassName("classe")
console.log(elementoPorClasse1);

const elementoPorClasse2= document.querySelector(".classe")
console.log(elementoPorClasse2);

//Alterando elementos
const t = document.write("teste")
const x = document.createElement("a")


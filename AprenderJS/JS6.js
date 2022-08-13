//alert('java script');//Mensagem de alerta que aparece dentro do site.
document.getElementById("texto").innerHTML= "Meu primeiro texto <b>JS</b>!";
//Alterei um atributo do html e fiz ele imprimir outro /  <b>: serve para colocar palvras em negrito.

function soma(valor1, valor2){
    return valor1 + valor2;
}
/*-------------------Saidas de dados
1- document.getElementById();
2-alert();
3-document.write();
4-console.log();
*/

document.getElementById("texto").innerHTML = soma(10,20); //innerHTML : passa uma mensagem pro documento html que esta sendo substituido.
var total = soma(50,78);
alert (total);//estou passando a mensagem da função pelo o alert.
console.log("Oi sou o console.log();");//estou imprimindo uma mensagem no console.







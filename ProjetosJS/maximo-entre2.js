// Escreva uma função que usa 2 numeros e retorna o maior entre eles.
let valorMaior =max(5,9);
function max(numero1,numero2){
    if (numero1> numero2)
        return numero1;
    else
        return numero2;  
}
console.log('O Valor e:',valorMaior);

let valorMenor =min(10,5)
function min(n1,n2){
    return n1<n2 ? n1:n2;
}
console.log('O valor e:',valorMenor);

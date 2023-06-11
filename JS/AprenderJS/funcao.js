/*
Uma função JavaScript é definida com a function palavra-chave, seguida por um nome , seguido por parênteses () .

Os nomes das funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras das variáveis).

Os parênteses podem incluir nomes de parâmetros separados por vírgulas:
( parâmetro1, parâmetro2, ... )

O código a ser executado, pela função, é colocado entre chaves: {} 
*/

function soma(x,v){
    return x+v
}
let fun = soma(45,330)

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
let value = toCelsius(95);

function multi(c,v) {//Variaveis dentro de funçãoe sao chamadas de locais
    let result = c*v //elas so podem ser acessadas dentro da funcao
    return result
}
let res = multi(78,3)

console.log(fun)
console.log(value)
console.log(res)

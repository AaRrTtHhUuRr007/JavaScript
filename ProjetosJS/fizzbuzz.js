//divisivel por 3=> Fizz
//divisivel por 5=> Buzz
//divisivel por 3 e 5=> FizzBuzz
//Não e divisivel por 3 ou 5=>Entrada
//Não e um numero=> 'Não e um numero'

const resultado=FizzBuzz(11);
console.log(resultado);

function FizzBuzz(Entrada){
    if (typeof Entrada !== 'number')
      return 'Nao e um numero';
    if (Entrada % 3===0 && Entrada % 5===0)
        return 'FizzBuzz';
    if (Entrada % 3=== 0)
      return 'Fizz';
    if (Entrada % 5 ===0)
      return 'Buzz';
    
}
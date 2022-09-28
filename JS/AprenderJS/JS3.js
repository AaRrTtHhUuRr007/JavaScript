//Operadores
//operadores Aritmeticos
console.log('operadores Aritmeticos');
let salario= 100;

console.log(salario+salario);
console.log(salario-salario);
console.log(salario*salario);
console.log(salario/salario);
console.log(salario**salario);

//operadores Atribuição
console.log('operador de atribuição');
let idade1=18;
console.log(idade1++);
console.log(idade1);
console.log(idade1--);
console.log(idade1);

//operadores de Igualdade
console.log('comparacao de valor');
//Igualdade = verifica o tipo da variavel nao o valor
console.log(1===1);
console.log('1'===1);
if(idade1 === '18'){
    console.log('sim');
}else{
    console.log('nao');
}

//Igualdade 
console.log('Operador de Igualdade');
console.log(1==1);
console.log('1'==1);
//operadores ternario
console.log('operador ternario');
//tem um cliente, se ele tiver mais de 1000, ele e premium se nao ele e comum.
let pontos=1000;
let tipo1=pontos>1000 ? 'premium': 'comum';
console.log(tipo1);


console.log('Operadores Logicos');
//operadores Logicos
//operador E (&&):retorna true se os dois operando forem true.
console.log('operador AND');
let maiorIdade= true;
let carteiraTrabalho= true;
let podeContratar= maiorIdade && carteiraTrabalho;

console.log(podeContratar);

//operador OU (||): retorna true se um dos operandos for true.
console.log('operador OR');
let menorIdade= false;
let carteiraDirecao= true;
let podeEscolher= menorIdade || carteiraDirecao;
console.log(podeEscolher);

//operador NOT (!): ele faz uma negacao e inverte o valor booleano, da expressao 
console.log('operador NOT');
let candidatoRecusado= !maiorIdade;
console.log('Candidato Recusado',candidatoRecusado);

let nome='arthur';
console.log(nome);
let idade2=19;
console.log(idade2);

let tipo2=0;
console.log(tipo2);
//final do codigo.

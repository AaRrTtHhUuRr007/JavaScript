//Declarando variaveis
console.log('Declarando variaveis');
let nome='arthur';
console.log(nome);
let idade=19;
console.log(idade);
console.log('Bem vindo Arthur ao JavaScript');
var sobrenome= 'ricardo';
console.log(sobrenome);
const x= 45;// essa variavel não pode ser alterada se estiver declarada como 'const'.
console.log(x);
console.log(typeof x);// 'typeof mostra o tipo da variavel'
console.log(x);
//objeto -> começa com '{}'
console.log('Objeto: daqui pra baixo');
let pessoa1={
    nome: 'Arthur',
    idade: '20',
    estadoCivil: 'Solteiro',
    altura: '1,87',
    peso: '70kg',
    cidadeNatal: 'Belo Horizonte',
    cidadeAtual: 'Tres Lagoas',
    pais: 'Brasil'
};

let pessoa2={
    nome: 'Helio',
    idade: '57',
    estadoCivil: 'Casado',
    altura: '1,82',
    peso: '90kg'
};

let pessoa3={
    nome: 'Marisa',
    idade: '58',
    estadoCivil: 'Casada',
    altura: '1,70',
    peso: '75kg'
};

let pessoa4={
    nome: 'Anna',
    idade: '32',
    estadoCivil: 'Solteiro',
    altura: '1,65',
    peso: '80kg',
    
};
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
//Array -> começa com '[]'
console.log('Array');
let familia =[pessoa1,pessoa2,pessoa3,pessoa4];
console.log(familia);

var v=[1,4,89,65];
console.log(v[0]);//imprimi uma posição especifica do Array 
console.log(v[3]);
v[4]= 55;//adicionando um elemento a um Array 
console.log(v);//imprimi todo o Array

var vetor=['arthur',20,1.87,true];//um array em javascript pode receber varios tipos de dados.

console.log(vetor[0]);
console.log(typeof vetor[0]);
console.log(vetor[2]);
console.log(typeof vetor[2]);
console.log(vetor[3]);
console.log(typeof vetor[3]);
console.log(vetor);
console.log(typeof vetor);

vetor[0]= 'ricardo';// estou alterando um elemento da array
console.log(vetor[0]);


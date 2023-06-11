//Variaveis Let Var Const

/*
VAR: A  palavra-chave é usada em todo o código JavaScript de 1995 a 2015.
As palavras-chave LET, CONST foram adicionadas ao JavaScript em 2015.
Se você deseja que seu código seja executado em navegadores mais antigos, você deve usar VAR.
variaveis VAR podem ser redeclaradas.

LET: A palavra-chave foi introduzida no ES6 (2015) .
Variáveis ​​definidas com LET não podem ser redeclaradas .
As variáveis ​​definidas com LET devem ser declaradas antes do uso .
Variáveis ​​definidas com LET têm escopo de bloco .

CONST :A palavra-chave foi introduzida no ES6 (2015) .
Variáveis ​​definidas com CONST não podem ser Redeclaradas.
As variáveis ​​definidas com CONST não podem ser reatribuídas.
Variáveis ​​definidas com CONST têm escopo de bloco. 
*/
console.log('Descobrindo o tipo da variavel: ')
let z =45
var x ='tu'
const y = true
console.log('Tipo: '+typeof(z))
console.log('Tipo: '+typeof(x))
console.log('Tipo: '+typeof(y))


console.log('Operacoes + - * / % ++ --')
let a =145+98
let b = (87-62)
let c =(4*9)
let d =(89/4)
let e =88%9
let f =0 
 f++
let g =0
g--

console.log('Adicao: '+a)
console.log('Subtracao: '+b)
console.log('Multiplicacao: '+c)
console.log('Divisao: '+d)
console.log('Resto: '+e)
console.log('Incremento: '+f)
console.log('Decremento: '+g)


/*JavaScript tem 8 tipos de dados
1. String
2. Número
3. Bigint
4. Booleano
5. Indefinido
6. Nulo
7. Símbolo
8. Objeto

O tipo de dados do objeto
1. Um objeto
2. Uma matriz
3. Uma data */

let string = 'string'
let number = 789
let Bigint = BigInt("123456789")
let boolean = true
let Indefinido
let Nulo =''
let Símbolo = 0

const obj = {Nome:"Arthur",Sobrenome: "Ricardo", Idade: 20, Masculino: true}
const matriz = ['arthur' , 'Ricardo' , 'Santana' , 'Souza']
const data = new Date("2002-08-04")


console.log('Tipo: '+typeof(string))
console.log('Tipo: '+typeof(number))
console.log('Tipo: '+typeof(Bigint))
console.log('Tipo: '+typeof(boolean))
console.log('Tipo: '+typeof(Indefinido))
console.log('Tipo: '+typeof(Nulo))

console.log('Tipo: '+typeof(obj))
console.log('Tipo: '+typeof(matriz))
console.log('Tipo: '+typeof(data))










//Metodod Strings
console.log('-----------Metodo Strings-----------')
//Length: retorna o coprimento da string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

//Slice():extrai uma parte de uma string e retorna a parte extraída em uma nova string.
let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7,13);
let part2 = text2.slice(-7);// Se colocar um numero negativo ela imprime de traz pra frente
console.log(part)
console.log(part2)

//substring()é semelhante a slice():A diferença é que os valores inicial e final menores que 0 são tratados como 0 em substring().
let str = "Apple, Banana, Kiwi";
let part3 = str.substring(13);
console.log(part3)

//substr()é semelhante a slice():A diferença é que o segundo parâmetro especifica o comprimento da parte extraída.
let str2 = "Apple, Banana, Kiwi";
let part4 = str2.substr(7,4);
console.log(part4)

//O replace():método substitui um valor especificado por outro valor em uma string:
let text3 = 'Estudando java'
let part5 = text3.replace('java', 'javascript')
console.log(part5)

//ToUpeerCase():Transforma uma string em maiuscula
let text4 = 'ichigo kurosaki'
let part6 = text4.toUpperCase()
console.log(part6)

//ToLowerCase():Transforma uma string em minuscula
let text5 = 'DEUS'
let part7 = text5.toLowerCase()
console.log(part7)

//concat():junta duas ou mais strings:
let t = 'naruto'
let tt = 'shipudem'
let concat = t.concat(' ',tt)
console.log(concat)

//trim():método remove espaços em branco de ambos os lados de uma string
let trim = '      reta'
let part8 = trim.trim()
console.log(part8)

//trimStart()método funciona como trim(): mas remove os espaços em branco apenas do início de uma string.
let trim2 = '         reta     bola  '
let part9 = trim2.trimStart()
console.log(part9)

//trimEnd()método funciona como trim(), mas remove os espaços em branco apenas do final de uma string.
let trim3 = '        reta   bola  '
let part10 = trim3.trimEnd()
console.log(part10)

//CharAlt():método retorna o caractere em um índice especificado (posição) em uma string:
let cha = 'car'
let part11 = cha.charAt(0)
console.log(part11)

//charCodeAt():método retorna o unicode do caractere em um índice especificado em uma string:
let text6 = 'hello world'
let part12 = text6.charCodeAt()
console.log(part12)

//Pesquisa String
console.log('-----------------Pesquisa String------------------------')

//indexOf():método retorna o índice (posição) da primeira ocorrência de uma string em uma string:
let text7 = 'Arthur ricardo sant aba  de souza'
let part13 = text7.indexOf('ricardo')
console.log(part13)

//lastIndexOf():método retorna o índice da última ocorrência de um texto especificado em uma string:
let text8 = 'por que a jente nao come a noite'
let part14 = text8.lastIndexOf('come')
console.log(part14)

//search():método procura uma string por uma string (ou uma expressão regular) e retorna a posição da correspondência:
let text9 = "Please locate where 'locate' occurs!";
let part15 = text.search("locate")
console.log(part15)


//startsWith()método retorna true se uma string começa com um valor especificado.
let text11 = 'aprendendo javascript n computador'
let part17 = text11.startsWith('aprendendo')//
console.log(part17)

//endsWith():método retorna true se uma string terminar com um valor especificado. Caso contrário retorna false:
let text12 = 'aprendendo javascript n computador'
let part18 = text11.endsWith('computador')
console.log(part18) 

//Metodos Numericos
console.log('-----------------Metodos Numericos------------------') 

//ToString():método retorna um número como uma string.
let text13 = 456
let part19 = text13.toString()
console.log('Tipo: '+typeof(part19)+ '-' +part19)

//toExponential():retorna uma string, com um número arredondado e escrito usando a notação exponencial.
let text14 = 4.2658
let part20 = text14.toExponential()
console.log(part20)

//toFixed():retorna uma string, com um número especificado de casas decimais:
let text15 = 9.7845
let part21 = text15.toFixed(1)
console.log(part21)

//toPrecision()retorna uma string, com um comprimento especificado:
let text16 = 8.794
let part22 = text16.toPrecision(4)
console.log(part22)

//valueOf()retorna um número como um número.
let text17 = 78
let part23 = text17.valueOf()
console.log(part23)







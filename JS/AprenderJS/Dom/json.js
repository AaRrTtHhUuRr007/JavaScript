// JSON (JavaScript Object Notation)
//Obj={nome:"teste"}     JSON=> {"nome": "teste"}
//Padroniza a comumicação FRONT=END e BACK=END  em uma linguagem so

const objeto = {nome:"joao", idade: 21}

const jsonString = JSON.stringify(objeto)//estou convertendo um obj em JSON

console.log( objeto)
console.log('estou convertendo um obj em JSON: '+jsonString)
//console.log(typeof( jsonString))

const json = '{"nome":"joao", "idade": 21}'

const objeto2 = JSON.parse(json)//ESTOU CONVERTENDO UM JSON EM OBJ

console.log(json);
console.log('ESTOU CONVERTENDO UM JSON EM OBJ: '+objeto2)



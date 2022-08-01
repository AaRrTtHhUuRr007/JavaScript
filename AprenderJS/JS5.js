// if...else

//Se a hora estiver estiver entre 06:00 ate 12:00 : Bom dia!
//Se estiver entre 12:00 ate 18:00 : Boa Tarde!
//Caso Contrario : Boa Noite!
let hora =15;


if(hora >6 && hora<12){
    console.log("bom Dia");
}
else if(hora >12 && hora <18){
    console.log("Boa Tarde");
}
else{
    console.log("Boa Noite"); 
}
console.log('Fim do if..else');
//swicht...Case
let permissao;//comum, gerente, diretor
switch(permissao){
    case 'comum':
    console.log('usuario comum');
    break;
    case 'gerente':
    console.log('usuario grente');
    break;
    case 'diretor':
    console.log('usuario diretor');
    break;

    default:
        console.log('usuario não reconhecido');
}

console.log('Fim de Swicht..Case');

                         //LOOPS//
//loop:1-For
for(let f=0; f<5; f++){
    console.log('Estou Aprendendo ',f); 
}

for(let f=0; f<=10; f++){
    if(f % 2 !==0){//mostrando numeros primos
        console.log(f);
    }
}
console.log('Fim do loop For');

//loop:2-While
let w=5;
while(w>=1){
    if(w % 2 !==0){
        console.log(w);
    }
    w--;
}
console.log('Fim do Loop While');

//loop:3-Do..While
let d=0
do{
    console.log('loop',d);
    d++;
}while(d<10)
console.log('Fim de loop Do..While');

//loop:4-For..In 
const pessoa={ 
    nome:'arthur',
    idade:25
};
//key-value: chave
for(let chave in pessoa){
    console.log(chave,pessoa['nome']);
}
const cores=['vermelho','Azul','Verde'];
for (let indice in cores){
    console.log(indice,cores[indice])
}
console.log('Fim doo For in');

//loop:5-For..of
for (let cor of cores){
    console.log(cor);
}


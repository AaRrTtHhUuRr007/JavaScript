//função
let corSite='azul';
function resetaCor(cor,tonalidade){
    corSite=cor+ tonalidade;
};
console.log(corSite);
resetaCor();
console.log(corSite);
resetaCor("vermelho");
console.log(corSite);
resetaCor("vermelho"," escuro");
console.log(corSite);

function dizerNome(){
    console.log('Arthur')
}
dizerNome();


function multiplicaçãoPorDois(valor){
    return valor*2;
    };
    //console.log(multiplicaçãoPorDois(0));
    
let resultado= multiplicaçãoPorDois(5);
console.log(resultado);


const x= function multi(a,b){return a*b};//isso e chamado de função anonima =(função sem nome).
var z= x(7,5);//essa função pode ser armazenada em variaveis
console.log(z);

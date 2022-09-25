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

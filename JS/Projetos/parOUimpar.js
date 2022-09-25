//receber uma quantidade de valor para avaliar
//Função exibe se cada valor e par ou impar

exibirTipos(5);
function exibirTipos(Limite){
    for(let i=0;i<=Limite;i++){
        if(i % 2 ===0){
            console.log(i,'par');
        }
        else
            console.log(i,'impar');
        
    }
}
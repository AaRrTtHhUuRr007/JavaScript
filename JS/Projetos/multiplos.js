//criar uma  função para somar a soma de todos os multiplos de 3 e 5
//multiplos 3= 3, 6, 9.
//multiplos 5= 5, 10.
//Somando os multiplos 
//armazenar os multiplos de 3.
//armazenar os multiplos de 5.
//Somar os dois .

somar(10);
function somar(limite){
    let multiplo3=0;
    let multiplo5=0;
    for(i=0;i<=limite;i++){
        if(i % 3 === 0)
        multiplo3 += i;
        if(i % 5 === 0)
        multiplo5 += 0;
    }
    console.log(multiplo3 + multiplo5);
}

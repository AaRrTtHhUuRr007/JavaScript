// velocidade maxima de ate 70km.
//a cada 5km acima do limete voce ganha 1 ponto
//math.floor()
//caso pontos sejam maior que 12 -> "Carteira Suspendida"
verificarVelocidade(110);

function verificarVelocidade(velocidade){
    const velocidadeMaxima=70;
    const pontosPorKM=5;

    if(velocidade<=velocidadeMaxima)
      console.log('OK');
    else {
        const pontos =((velocidade -velocidadeMaxima)/pontosPorKM);
        if(pontos>=12)
        console.log('Carteira Suspendida');
        else
        console.log('Pontos',pontos);
   }
      
}
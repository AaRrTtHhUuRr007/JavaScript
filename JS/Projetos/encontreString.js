//Criar um metodo para ler propriedades de um objeto 
// Exibir somente as propriedades do tipo string que estão neste objeto
const filme={
    titulo:'minions',
    duracao:'1:30',
    classificacao:'18+',
    tipo:'animado'
}
exibirPropriedades(filme);
function exibirPropriedades(objeto){
    for(prop in objeto)
      if(typeof objeto[prop] === 'string')
       console.log(prop,objeto[prop] ); 
}
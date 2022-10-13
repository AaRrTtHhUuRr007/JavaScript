//Metodos Numericos

    //parsefloat =e um metodo que transforma outros tipos de numeros em float

console.log(parseFloat('12.999'));
console.log(Number.parseFloat(12.999));

    //parseInt= esse e o um metodo que transforma outros tipos de numeros em Int

console.log(parseInt(14.89));
console.log(parseInt('14.89'));

    //tofixed = limita os numeros depois da virgula

console.log(14.78788778.toFixed(2));
console.log(144788484.8484848784.toFixed(2));



//Metodas Strings

    //toLowerCase=imprimi todas as letras em minusculas
console.log('ARTHUR'.toLowerCase());


    //toUpperCase=imprimi todas as letras em maiusculas
console.log('arthur'.toUpperCase());


    //trim=corrigi os espaços vazios de uma declaração de String

    var nome='              arthur';
    console.log(nome);

    var nometrim =nome.trim();
    console.log(nometrim);


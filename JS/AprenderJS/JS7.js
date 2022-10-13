//Length = mostra o tamanho do array.

var arr=[1,2,3,4,5];

console.log(arr.length);

//Push = adiciona um elemento no array.
arr.push(6);
console.log(arr);
arr.push('aaafdfd');
console.log(arr);

//Pop = retira um elemento do array.
arr.pop();
console.log(arr);

//unshift= adiciona um elemento no inicio do array

arr.unshift(0);
arr.unshift('teste');
console.log(arr);

//shift = remove o primeiro elemento do array

arr.shift()
console.log(arr);

//splice = adiciona um elemento no meio do array
arr.splice(1, 0, 999);
console.log(arr);

//join = transforma um array em uma string

var arr2= ['arthur', 'ricardo', 'salario', 'Verde']
console.log(arr2.join(' '));

//indexOF

console.log(arr.indexOf(4));
console.log(arr);

//reverse

console.log(arr2.reverse());
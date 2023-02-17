//Array normal en JS
const myArray = [1,2,3,4,5,['A','B','C', [7,8,9]]];
console.log(myArray);

//Otra forma de crear arrays
const newArray = Array.of('X','Y','Z',1,3);
console.log(newArray);

//Otra forma de crear arrays
const newArrayFill = Array(10).fill(true);
console.log(newArrayFill);

let valorAcumulado = 0;
const myNumbersArray = [3, 6, -2, -5, 7, 3];
myNumbersArray.forEach(function(a,b){
    let product = a * b;
    console.log(`${a}, ${b} =  ${product}`);
    if (valorAcumulado < product) {
        valorAcumulado = product;
    }
}) 

console.log(valorAcumulado);

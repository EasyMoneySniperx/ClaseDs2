const arreglo = [0];

arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
arreglo.push(5);

let arreglo2 = arreglo;

arreglo2.push(6);

console.log(arreglo);
console.log(arreglo2);

let arreglo3 = [...arreglo, 7];
console.log(arreglo3);

let arreglo4 = arreglo3.map(function (num){
    return num * 2;
}
);





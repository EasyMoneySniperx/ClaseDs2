const nombre = "Juan";
const apellido = "Revelo";
const fullname = `${nombre} ${apellido}`;

console.log(nombre + " "+ apellido);
console.log(fullname);

function getHi(fullname){
    return `Hello ${fullname}`
}
console.log(getHi(fullname));


const saludando = `${getHi("fredy Ballesteros")}`;
console.log(saludando);
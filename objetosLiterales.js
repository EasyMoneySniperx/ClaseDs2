const datosPersonales = { //objeto literal es mutable, se puede cambiar el valor
    nombre: "Juan",
    apellido: "Revelo",
    edad: 23,
    adress:{
        ciudad:"cali",
        zip: 23.55,
        lat: 14.21,
        ing: 34.52
    }
};

const datosPersonales2 = {...datosPersonales};

console.log(datosPersonales.edad);

datosPersonales.edad = 26;

console.log(datosPersonales.edad);

console.log(datosPersonales["nombre"]);
console.log(datosPersonales.adress);

datosPersonales.adress.ciudad = "medellin";
console.log(datosPersonales.adress);

console.log(datosPersonales2.edad);
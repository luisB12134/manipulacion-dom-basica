//Funciones declarativas
//Se pueden añadir valores por defecto a una funcion y se le puede hacer hoisting
function estadoFuncion(nombre = 'Desconocido', edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

//Llamado de la funcion 
//estadoFuncion();

//Funciones expresivas no se le puede hacer hoisting
const funcionExpresada = function() {
    console.log("Esto es una funcion expresada! ");
}

funcionExpresada();
/*Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch */ 
const logger = require('./logger');

const error = params => {
    if(typeof val === "string"){
     console.log("Es un string");
    }
    throw new Error ("Se requiere un String")
}
console.log("hola");
console.info("info");
console.warn("warn");
const number = 21;
const string2 = "Hello Mothefucker"

try {
    console.log("funciona correctamente")
    const number2 = error(number)
    console.log(number2);
    const error2 = error(string2);
    console.log(error2);
} catch (e) {
    console.error(e)
}

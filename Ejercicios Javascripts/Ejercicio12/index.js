/*Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch */ 
const logger = require('./logger');
const error = params => {
    throw new Error("Fracasado");
}

try {
   error();
} catch (e) {
    logger.error("error", e.toString());
}

/*- Abre una nueva ventana "about:blank" en Google Chrome

- Abre la consola de desarrollador de Google Chrome (F12)

- Pregunta al usuario cuál es su edad y almacénala en una variable llamada edad */
const age = prompt("Cuantos años tenes")
const over_18_ = ( ) => {
    if(age < 18){
        return prompt("Sos menor de edad");
    } else {
        return prompt("Sos mayor de edad");
    }
}
over_18_();
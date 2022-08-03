//- Una variable que contenga tu altura en metros (número de coma flotante)
const heigth = 1.72;
//Una variable que contenga tu altura en centímetros (entero)
const heigth_c = heigth * 100;
console.log(heigth_c)
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
const weight = 73.5;
//- Una variable que contenga tu altura en metros redondeada hacia arriba
const heigth_round = Math.ceil(heigth);
console.log(heigth_round)
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const weight_round = Math.floor(weight)
console.log(weight_round)
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript 
const result = (Number.MAX_VALUE + 1) === (Number.MAX_VALUEs);
console.log(result) 
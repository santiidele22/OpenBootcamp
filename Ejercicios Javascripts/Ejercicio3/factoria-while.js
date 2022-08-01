/* el factorial de 10 seria 
10 * 9 * 8 * 7 *6 *5 *4 *3 *2 *1 = 3628800
*/
/*la logica seria primero toma el numero 1 y lo multiplica por si mismo 1*1=1 el resultado se guarda y pasa al sig num que se multiplica por si mismo y por el numero anterior 2 * 2 * 1... y asi hasta llegar a 10:  */
let i = 0;
let factorial = 1;
    while(i <= 10){
        i++;
        factorial = factorial * i;
        console.log(factorial);
    }
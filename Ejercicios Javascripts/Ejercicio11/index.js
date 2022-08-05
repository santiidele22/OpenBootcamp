//- Una función sin parámetros que devuelva siempre "true"
const alwaysTrue = () => {
    return true;
  };
  //- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
  /*const promesa = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(resolve("Hola soy una promesa"));
      }, 5000);
    });
  }; */
  async function promesa () {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
  }
  //- Una función generadora de índices pares automáticos */
  function* idMaker(){
      var index = 0;
      while(index < 10)
        yield index += 2;
    }
  const acc = idMaker();
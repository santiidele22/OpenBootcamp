//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaDeCompra = ["harina","leche","galletitas","Pollo","Avena","Yogurt"];
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listaDeCompra.push("Aceite de Girasol");
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaDeCompra.pop()
//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const movies = [
    {
      title: "The Lord of the Ringss",
      director: "Peter Jackson",
      date: new Date(2001, 12, 21),
    },
  
    {
      title: "Interstellar ",
      director: "Christopher Nolan",
      date: new Date(2014, 11, 5),
    },
  
    {
      title: "Harry Potter y el prisionero de Azkaban",
      director: "Alfonso Cuarón",
      date: new Date(2004, 6, 4),
    },
  ];
  //- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
  const movie_filter = movies.filter(
    (movie) => movie.date > new Date(2010, 12, 1)
  );
  //- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
  const directores = movies.map((director) => director.director);
  //- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
  const title = movies.map((title) => title.title);
  
  //- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
  const concat = directores.concat(title);
  //-Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) 
  const conca2 = [...directores, ...title]
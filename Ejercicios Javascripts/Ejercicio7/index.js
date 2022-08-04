/*Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */
const f_set = new Set();
f_set.add("pris");
f_set.add("nahi");
f_set.add("sol");
f_set.add("nico");
f_set.add("fio");
console.log(f_set)
f_set.add("pris");
f_set.add("pris");
f_set.add("pris");
console.log(f_set)
f_set.add("Javascripts");
console.log(f_set)

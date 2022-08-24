/*- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

- Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

- Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

- Observa cómo la SessionStorage está vacía

- Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

- Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado */


const name = "santiago";
const lastName = "Delebecq";
let addMlSeconds = 60 * 60000;
const obj = {
    name: name,
    lastName: lastName
}
localStorage.setItem(obj, {name: lastName})

document.cookie = "nombreCookies= obj, expire=" + new Date(addMlSeconds * 2).toUTCString() 
const btn = document.querySelector("btn");
btn.addEventListener("click",() => {
    alert('click en el botón');
})
/* JQuery*/
$("#btn2").click(() => {
    $("h3").append("<h1>Bienvenido</h1>")
console.log("Hola, Estoy Utilizando jQuery");
})
$("#btn2").mouseenter((e) => {
   e.target.style.color = "blue"
})
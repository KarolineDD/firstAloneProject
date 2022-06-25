const elementoNumero = document.querySelector("#numero")
const dado = document.querySelector('#dado')
const numeros = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
]

/*clicar em dado 1*/
function dado1() {
    dado.setAttribute("disabled", true)
    const resposta = numeros.length
    const numeroAleatorio = Math.floor(Math.random()* resposta)
    elementoNumero.innerHTML = numeros[numeroAleatorio]

    elementoNumero.style.opacity = 1;
 setTimeout(function() {
     elementoNumero.style.opacity = 0;
     dado.removeAttribute("disabled")
  }, 3000)
}
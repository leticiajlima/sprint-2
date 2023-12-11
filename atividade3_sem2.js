var input = document.querySelector("input");
var botao = document.querySelector("button");
var div = document.querySelector("div");

var numeroClientes = 0

function categorias(){
    var criap = document.createElement("p");
    numeroClientes = numeroClientes + 1;

    var texto = `Codigo ${numeroClientes} <br> Nome: ${input.value}`;

    criap.innerHTML = texto
    div.appendChild(criap)

}
botao.onclick = categorias
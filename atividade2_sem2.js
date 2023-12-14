alert("BEM VINDO AO COMEX");

function escreva(msg) {
    document.write(msg);
}

 function pulaLinha(){
    document.write("<br>");
    document.write("<br>");

 }
function linha() {
    document.write("<hr>");
}
function titulo(msg) {
    document.write("<h1>" + msg + "</h1>");
    linha();
    pulaLinha();
}
function mostraConteudo(msg) {
    document.write("<h5>" + msg + "</h5>");
    pulaLinha();
}
function imprimaCod(indice) {
    document.write("<h3> -" + conteudo1 + indice + "</h3>");
}
function facaRodape(msg) {
    linha();
    document.write("<h2>" + msg + "</h2>");
   
}

var tituloP = ">>COMEX<<";
var subtitulo = ".::Lista de Clientes::.";
var conteudo1 = "CÓDIGO ";

var ano = window.prompt("INFORME O ANO: ");
var mes = window.prompt("INFORME O MÊS: ");

titulo(tituloP);
titulo(subtitulo);

var totalIDades = 0;
var NumeroDePessoas = window.prompt("QUANTIDADE DE PESSOAS:");

for (var i = 0; i < NumeroDePessoas; i++) {
    imprimaCod(i + 1);

    var nome1 = window.prompt("NOME DOS CLIENTES: " + (i + 1));
    var anoDeNascimento = window.prompt("ANO DE NASCIMENTO: " + (i +1));

    document.write("<ul>");

    document.write("<li>" + "NOME: " + nome1 + "</li>");
    pulaLinha();
    document.write("<li>" + "MES DE NASCIMENTO: " + mes + "</li>");
    pulaLinha();
    document.write("<li>" + "ANO NASCIMENTO: " + anoDeNascimento + "</li>");
    pulaLinha();

    var idade = ano - anoDeNascimento;

    if (idade <= 17) {
        
        escreva("<li>Classificação Etária: ADOSLESCENTE</li>");
    }
    else if (idade <= 29) {
        escreva("<li>Classificação Etária: JOVEM ADULTO</li>");
       
    } else if (idade <= 59) {
        escreva("<li>Classificação Etária: ADULTO</li>");
       
    } else if (idade >= 60) {
        escreva("<li>Classificação Etária: COROA</li>");
        
    } else {
        
        escreva("<li>ALGO ESTÁ ERRADO</li>");
        document.write("</ul>");
        
    }
    totalIDades += idade;
    console.log(totalIDades)
}
linha();
escreva("<p>");
escreva("**ESTATÍSTICA**")
pulaLinha();
escreva("SOMA DAS IDADES: " + totalIDades);

pulaLinha();
var media = totalIDades / NumeroDePessoas
escreva("A MÉDIA É: " + media);

facaRodape(".::ALURA Level UP::.");